const fs= require("fs");
const http=require("http");
server = http.createServer(function(req,resp){
    rs=fs.createReadStream("./public/index.html");
    rs.pipe(resp);
});
server.listen(4000);
console.log("server is listening on port 4000");