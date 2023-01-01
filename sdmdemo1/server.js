var express= require("express");
const app=express();
var bodyparse=require("body-parser");
var path=require("path");
app.use(express.static(path.join(__dirname,"public")));

// app.get("/",function(req,resp){
//     resp.sendFile(path.join(__dirname,"./public/index.html",));
// });

app.listen(5000);
console.log("server is listening on port 5000");
