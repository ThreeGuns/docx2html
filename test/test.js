const fs = require('fs');
const path = require('path');
const state = fs.existsSync('../aa/a');
console.log(state);
const absolutePath = path.resolve('￥…./…a*a/');
const normalizedPath = path.normalize(absolutePath);
console.log(normalizedPath);
console.log(process.platform);
if('win32' === process.platform){
    console.log(normalizedPath.substring(0, normalizedPath.lastIndexOf('\\')));
}else {
    console.log(normalizedPath.substring(0, normalizedPath.lastIndexOf('/')));
}
fs.lstatSync('./b/bb/bbb');

