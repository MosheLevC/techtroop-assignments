const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(`method: ${req.method}\nURL: ${req.url}`);

  if (req.method === "GET") {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;

    if (req.url === "/") res.write("Welcome to my server!");
    else if (req.url === "/about") res.write("This is the about page");
    else if (req.url === "/contact") res.write("Moshe Lev Ceder 1-800-273-8255");
    else {
      res.statusCode = 404;
      res.write("404 - Page not found");
    }
  } else res.statusCode = 405;

  res.end();
});

const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
