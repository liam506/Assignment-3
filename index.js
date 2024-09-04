//load node http module 
const http = require("http");

//load file system module using promises instead of callbacks 
const fs = require("fs").promises;

//function to response to http request
const requestListener = function(req, res)
{
    console.log(req.url);

    //If statement to load the html file based on the user's request else the json file
    if(req.url = "/"){
        fs.readFile( __dirname + "/direct.html")
        .then(
            contents =>{
                res.setHeader("Content-Type", "text/html; charset=UTF-8");

                //return 200 ok
                res.writeHead(200);
                res.end(contents);

            }
        );
    } else
    {
        fs.readFile( __dirname + "/map.json")
        .then(contents =>{
            res.setHeader("Content-Type", "text/html; charset=UTF-8");

            //return 200 ok
            res.writeHead(200);
            res.end(contents);
        });
    }
};

//creating a webserver instant
const server = http.createServer(requestListener);

//defining the TCP ports
const host = "127.0.0.1";
const port = "3000";

//Starting the listening request from the http server
server.listen(
    port, host, 
    () =>{
        console.log("Server is up and running");
    }
);