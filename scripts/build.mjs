import {existsSync} from 'node:fs';
for(const file of ['public/index.html','public/app.js','public/style.css','api/consultations.js'])if(!existsSync(file))throw new Error('Missing '+file);
console.log('AutomationWorks: static website and consultation function ready.');
