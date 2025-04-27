import fs from 'fs';
 import path from 'path';
 
 export default function handler(req, res) {
   if (req.method === 'POST') {
     const filePath = path.join(process.cwd(), 'app', '(root)', 'data', 'applications.json');
     let applications = [];
 
     if (fs.existsSync(filePath)) {
       const fileData = fs.readFileSync(filePath, 'utf8');
       applications = JSON.parse(fileData);
     }
 
     applications.push(req.body);
     fs.writeFileSync(filePath, JSON.stringify(applications, null, 2));
 
     res.status(200).json({ message: 'Заявку успішно відправлено!' });
   } else {
     res.status(405).json({ message: 'Метод не дозволений' });
   }
 }