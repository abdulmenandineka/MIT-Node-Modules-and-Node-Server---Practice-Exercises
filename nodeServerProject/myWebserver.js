const http = require("http");
const fs = require("fs");
const url = require("url");

// const server = http.createServer((req, res) => {
  // let parsedUrl = url.parse(req.url);
  // let parsedUrlPath = parsedUrl.path;
  // if ((parsedUrlPath = "/index.html")) {
  //   let myFullPath = __dirname + parsedUrlPath;
  //   fs.readFile(myFullPath, (err, data) => {
  //     if (err) {
  //       res.writeHead(404);
  //       res.end("not found the path");
  //     } else {
  //       res.writeHead(200, { "content-type": "text/html" });
  //       res.end(data);
  //     }
  //   });
  // }

  // let parsedUrl = url.parse(req.url);
  // let parsedUrlPath = parsedUrl.path;
  // if (parsedUrlPath == "/") {
  //   parsedUrlPath = "/index.html";
  // }
  // let myFullPath = __dirname + '/static' + parsedUrlPath  ;
  // fs.readFile(myFullPath, (err, data) => {
  //   if (err) {
  //     res.writeHead(404);
  //     res.end("not found the path");
  //   } else {
  //     res.writeHead(200, { "content-type": "text/html" });
  //     res.end(data);
  //   }
  // });
// });

// server.listen(1234, () => {
//   console.log("running on 1234");
// });
///                            ending http module

///                            using express package

// const express = require('express');
// const app = express();

// app.use(express.static('static'));


// app.listen(1234, () => {
//   console.log("Server running on port 1234");
// })
