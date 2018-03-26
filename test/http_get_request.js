const http = require('http');

try{
    const req = http.request({
        host: "static.bqj.cn",
        // "port": 80,
        "path": "/clientversions/BanQuanJia_Setup_1.0.0.1.exe",
        "method": "GET",
        "headers": {
            "Content-Type": "application/octet-stream"
        },
    }, (res) =>{
        console.log(res.statusCode);
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    // req.write();
    req.end();//如果是http.request()，必须手动end，get不用
}catch(e){
    console.error(e);
}
