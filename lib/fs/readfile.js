const fs = require('fs');
const path = require('path');

function injectCode(source, placeholder, replaceValue){
    return source = source.replace(placeholder,replaceValue);     
}

const createHTML = (resp) => {
   return new Promise(function(resolve,reject){
       const htmlCreatedPath = path.join(__dirname,'..','..','dist','index.html');
       fs.writeFile(htmlCreatedPath,resp,(err) => {
           if (err) reject(err);
           resolve('html with cards is sucessfully created!')
       });
   })
}

const readFile = (cards) => {
    return new Promise(function(resolve,reject){
        const htmlTemplatePath = path.join(__dirname,'..','..','src','template.html');
        fs.readFile(htmlTemplatePath,'utf-8', (err,data)=>{
            if (err) reject(err);
            data = injectCode(data,`{{inject all cards}}`,cards)
            resolve(data)
        })
    })
}

module.exports = {
    createHTML,
    readFile
}