let http = require("http");
let fs = require("fs");

let rootPath = "../"; //根目录

http.createServer((req, res) => {
  let url = req.url;
  let filePath = rootPath + url;
  fs.readFile(filePath, (err, data) => {

    if (err) {

      res.writeHeader(404, {
        "content-type": "text/html;charset='utf-8'"
      })
      res.write("<h1>404</h1><p>页面未找到</p>");
      res.end();

    } else {

      res.writeHeader(200, {
        "content-type": "text/html;charset='utf-8'"
      })
      res.write(data);
      res.end();

    }

  });

}).listen("8888");

console.log("服务启动");