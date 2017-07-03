var bodyParser=require('body-parser');
var express=require('express');
var fs=require('fs');
var app=express();

app.listen(3000,function(){
    console.log("服务器已启动")
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/index",function(req,res){
    //res.send(req.body.userName);
    var str=JSON.stringify(req.body);
    fs.writeFile("public/work1.json",str,"utf-8",function(err){
        if(err){
            res.send({err:err})
        }
        else{
            res.send({success:"保存成功"})
        }
    })
});

app.get("/work1",function(req,res){
    fs.readFile("public/work1.json","utf-8",function(err,data){
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
