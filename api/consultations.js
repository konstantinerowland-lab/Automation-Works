import {put,list} from '@vercel/blob';
import {createHandler} from '../lib/consultation-handler.js';
export default createHandler({
 ready:()=>Boolean(process.env.BLOB_READ_WRITE_TOKEN),
 count:async prefix=>(await list({prefix,limit:3})).blobs.length,
 save:async(pathname,record)=>put(pathname,JSON.stringify(record,null,2),{access:'private',addRandomSuffix:false,contentType:'application/json'})
});
