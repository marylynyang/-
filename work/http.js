var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    var a=req.url;
    switch(a){
        case "/index.html":
            fs.readFile('public/index1.html', "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                }
                else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data)
                }
            });
            break;

        case "/index1.html":
            fs.readFile('public/index1.html', "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                }
                else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data)
                }
            });
            break;

        case "/index.css":
            fs.readFile('public/index.css', "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                }
                else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/css;charset=utf8"});
                    res.end(data)
                }
            });
            break;

        case "/index.js":
            fs.readFile('public/index.js', "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                }
                else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/javascript;charset=utf8"});
                    res.end(data)
                }
            });
            break;

        case "/1.jpg":
            fs.readFile('public/1.jpg', function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                }
                else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "image/jpeg"});
                    res.end(data)
                }
            });
            break;

        case "/index2.html":
            fs.readFile('public/index2.html', "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                }
                else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data)
                }
            });
            break;

        case "/index3.html":
            fs.readFile('public/index3.html', "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                }
                else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data)
                }
            });
            break;

        //其他请求
        default:res.end("404 no fond")
    }
}).listen(3000);