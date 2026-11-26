import {randomUUID,createHash} from 'node:crypto';
export function createHandler(storage){
 return async function handler(req,res){
  const reply=(status,data)=>{res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.end(JSON.stringify(data));};
  if(req.method!=='POST')return reply(405,{error:'Method not allowed.'});
  const origin=req.headers.origin;
  if(origin){try{if(new URL(origin).host!==req.headers.host)return reply(403,{error:'Please submit from the AutomationWorks website.'});}catch{return reply(403,{error:'Invalid request origin.'});}}
  if(!String(req.headers['content-type']||'').includes('application/json'))return reply(415,{error:'Expected a JSON request.'});
  if(Number(req.headers['content-length']||0)>15000)return reply(413,{error:'The request is too large.'});
  try{
   let data=req.body;
   if(data===undefined){let raw='';for await(const chunk of req){raw+=chunk;if(raw.length>15000)return reply(413,{error:'The request is too large.'});}data=raw;}
   if(typeof data==='string'){if(data.length>15000)return reply(413,{error:'The request is too large.'});try{data=JSON.parse(data)}catch{return reply(400,{error:'Invalid request.'});}}
   if(!data||typeof data!=='object'||Array.isArray(data))return reply(400,{error:'Invalid request.'});
   if(data.website_url)return reply(400,{error:'Unable to submit this request.'});
   const limits={name:100,email:254,business:150,industry:100,package:100,budget:100,availability:200,challenge:3000};const values={};
   for(const [key,max] of Object.entries(limits)){const value=data[key]??'';if(typeof value!=='string'||value.length>max)return reply(400,{error:'Please shorten the '+key+' field.'});values[key]=value.trim();}
   if(!values.name||!values.business||!values.challenge||!values.industry||!values.package)return reply(400,{error:'Please complete your name, business, industry, service, and project details.'});
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))return reply(400,{error:'Please enter a valid email address.'});
   if(data.consent!==true)return reply(400,{error:'Please confirm we can contact you about the consultation.'});
   if(!storage.ready())return reply(503,{error:'Consultation requests are temporarily unavailable. Please try again later.'});
   const now=new Date(),email=values.email.toLowerCase(),hash=createHash('sha256').update(email).digest('hex').slice(0,24),prefix='consultations/'+now.toISOString().slice(0,10)+'/'+hash+'/';
   if(await storage.count(prefix)>=3)return reply(429,{error:'We already have your recent requests. Please allow the team to follow up.'});
   const id=randomUUID(),reference='AW-'+id.slice(0,8).toUpperCase();
   const record={id,reference,...values,email,service:values.package,consent:true,status:'new',created_at:now.toISOString()};delete record.package;
   await storage.save(prefix+id+'.json',record);
   return reply(201,{ok:true,reference});
  }catch{return reply(500,{error:'Unable to save your request right now. Please try again.'});}
 };
}
