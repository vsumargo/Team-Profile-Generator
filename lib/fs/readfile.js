const fs = require('fs');
const path = require('path');

const createHTML = (resp) => {
   return new Promise(function(resolve,reject){
       const htmlCreatedPath = path.join(__dirname,'..','..','dist','index.html')
       fs.writeFile(htmlCreatedPath,resp,(err) => {
           if (err) reject(err);
           resolve('html with cards is sucessfully created!')
       })
   })
}

function injectCode(source, placeholder, replaceValue){
    return source = source.replace(placeholder,replaceValue);     
}

let joinCards = 
                `<div class="col-3">
                    <div class="card">
                        <div class="card-header">
                            <h3>{{name}}</h3>
                            <div>{{title}}</div>
                        </div>
                        <div class="card-body">
                          <div>ID: {{id}}</div>
                          <div>Email: {{email}}</div>
                          <div>{{varies}}</div>
                        </div>
                    </div>
                </div>\n`
;

const htmlTemplatePath = path.join(__dirname,'..','..','src','template.html')

// fs.readFile(htmlPath,'utf-8', (err,data)=>{
//         if (err) throw err;
//         data = injectCode(data,`{{inject all cards}}`,joinCards)
//         console.log(data);
// })

const readFile = (htmlPath) => {
    return new Promise(function(resolve,reject){
        fs.readFile(htmlPath,'utf-8', (err,data)=>{
            if (err) reject(err);
            data = injectCode(data,`{{inject all cards}}`,joinCards)
            resolve(data)
        })
    })
}

readFile(htmlTemplatePath)
.then((resp) => createHTML(resp))
.then((resp) => console.log(resp))
.catch((err) => console.log(err))