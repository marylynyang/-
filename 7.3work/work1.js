var express=require('express');
var app=express();
var fs=require('fs');
app.listen(3000,function(){
    console.log("服务器已启动")
});

app.use(express.static('public'));
//app.get("/index1",function(req,res){
//    //res.send(req.query.userName);
//    var str=JSON.stringify(req.query);
//    //var result=JSON[req.query.userName];
//    fs.writeFile("public/work2.json",str,"utf-8",function(err){
//        if(err){
//            console.log("写入失败");
//            res.send(err)
//        }
//        else{
//            //console.log("写入成功");
//            res.send("写入成功")
//        }
//    })
//});
//
//app.get("/work2.json",function(req,res){
//    fs.readFile("work2.json","utf-8",function(err,data){
//        if(err){
//            console.log("读取失败");
//            console.log(err)
//        }
//        else{
//            res.writeHead(200, {"content-type": "application/json;charset=utf8"});
//            res.end(data)
//        }
//    })
//});

var bodyParser=require('body-parser');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.post("/index1",function(req,res){
//    //res.send(req.body.userName);
//    var str=JSON.stringify(req.body);
//    fs.writeFile("public/work2.json",str,"utf-8",function(err){
//        if(err){
//            res.send({err:err})
//        }
//        else{
//            res.send({success:"保存成功"})
//        }
//    })
//});
//
//app.get("/work2",function(req,res){
//    fs.readFile("public/work2.json","utf-8",function(err,data){
//        if(err){
//            console.log("读取失败");
//            console.log(err)
//        }
//        else{
//            res.writeHead(200, {"content-type": "application/json;charset=utf8"});
//            res.end(data)
//        }
//    })
//});

//使用我们路由对象
//加载 路由模块
var router=require('./work2.js');
//使用
app.use(router);