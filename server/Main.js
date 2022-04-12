
const express = require('express');
const server = express();
const port = 5000;

// remove this method to use native methods for parsing incoming data

server.use(express.json());
server.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})


server.get('/', (req, res) => res.send('yo'))


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
    
    let response = JSON.stringify({data: 'accepted'})
    let noMatchFound = JSON.stringify({data: 'no match found'})
    
    if(req.body.data.name === 'dude' && req.body.data.password === 'guest'){
        res.send(response);        
    }
    else{
        res.send(noMatchFound);
    }

})

server.listen(port, console.log(' Server is listening '))