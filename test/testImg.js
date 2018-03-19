const docx2html = require('../lib/index');
const path = require('path');
const fs = require('fs');

const docsDirPath = './docs';
const htmlDirPath = './html';
const htmlFileSuffix = '.html';
const imgDocFilePath = '图片doc.docx';

const imgDocFileFullPath = path.resolve(__dirname, docsDirPath, imgDocFilePath);
docx2html(imgDocFileFullPath).then(function(html){
    console.log(html.toString());
    const generateFilePath = path.resolve(htmlDirPath, path.basename(imgDocFileFullPath)+htmlFileSuffix);
    fs.writeFile(generateFilePath, html, {encoding: 'utf8'}, (err) => {
        if(err){
            return console.error(err);
        }
        console.log(`generate file [${generateFilePath}] done`);
    });
}).catch(e => {
    console.error(e);
});