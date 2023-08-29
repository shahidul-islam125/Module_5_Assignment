/*
*Title: "Assignment ans script of Module-05"
*Description: Node js server & file system
*Author: SHAHIDUL ISLAM
*Date: 29 Aug 23
*/

//Dependencies
const http = require('http')
const fs = require('fs')

//create server
const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("This is Home Page")
        res.end()

    } else if(req.url == "/about"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("This is About Page")
        res.end()

    }else if(req.url == "/contact"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("This is Contact Page")
        res.end()

//File create using fs module
    }else if(req.url == "/file-write"){
       fs.writeFile("demo.txt", "hello world", (err) => {
        if(err) throw err
        console.log("Saved!")
       })
    }
})

//Server running on port
server.listen(3000, () => {
    console.log('Listening on port 3000')
})