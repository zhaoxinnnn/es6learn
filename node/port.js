let http = require("http");
let fs = require("fs");
let rootPath = "../index.html";
http.createServer((res,req) => {
  let url = res.url;
  console.log(url);
  fs.writeFile(url,(err,data) => {
      if(err){
        res.writeHeader("404",{
          "Content-Type:text/plain;charsets='utf-8'"
        });
        res.write("<h1>404</h1><p>抱歉页面未找到</p>");
        res.end();
      }else{
        res.writeHeader("202",{
          "Content-Type:text/plain;charsets='utf-8'"
        });
        res.write(da);
        res.end();
      }
  })
}).listen("8888");
