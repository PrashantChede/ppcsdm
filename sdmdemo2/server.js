var express=require("express");
const app=express();
var path=require("path");
app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname,"public/index.html"));
});

app.listen(4000);
console.log("server is listening on port 4000");