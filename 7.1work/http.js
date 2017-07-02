var express=require('express');
var app=express();
var fs=require('fs');
app.listen(3000,function(){
    console.log("服务器已启动")
});

app.get("/index",function(req,res){
    res.send(req.query.userName);
    fs.writeFile("work2.json",req.query.userName,"utf-8",function(err){
        if(err){
            console.log("写入失败");
            console.log(err)
        }
        else{
            console.log("写入成功")
        }
    });
    fs.writeFile("work3.json",req.query.userName,"utf-8",function(err){
        if(err){
            console.log("写入失败");
            console.log(err)
        }
        else{
            console.log("写入成功")
        }
    });


});

app.use("/work3.json",function(req,res){
    fs.readFile("work3.json","utf-8",function(err,data){
        if(err){
            console.log("读取失败");
            console.log(err)
        }
        else{
            res.writeHead(200, {"content-type": "application/json;charset=utf8"});
            res.end(data)
        }
    })
});

app.use(express.static("public"));