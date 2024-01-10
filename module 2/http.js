const http = require('http');

const server = http.createServer(function(req, res){
    if (req.url === "/")
    {
        res.write("Hello world");
        res.end();
    }
    if (req.url === "/api/courses")
    {
        res.write(JSON.stringify({"title": "NodeJs", "price": 200, "review": 4.5}));
        res.end();
    }
});

server.listen(3000);
console.log("Server is listening on port 3000 ...")