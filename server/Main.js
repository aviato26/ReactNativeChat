
const express = require('express');
const server = express();
const port = 5000;

// remove this method to use native methods for parsing incoming data
server.use(express.json());

server.post('/signup', (req, res) => {
    
    /*
    let dataFromPost = "";

    req.on('data', (chunk) => {
        console.log(chunk)
        dataFromPost += chunk;
    })

    req.on('end', () => {
        console.log(dataFromPost);
        //res.writeHead(200);
        res.send('i think this workd')
    })
    */

    console.log(req.body)
    return 0;

})

server.listen(port, console.log(' Server is listening '))