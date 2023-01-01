var express= require("express");
const app=express();
var bodyparse=require("body-parser");

app.get("/",function(req,resp){
    resp.sendFile("index.html",{__dirname});
});

app.listen(5000);
console.log("server is listening on port 5000");
