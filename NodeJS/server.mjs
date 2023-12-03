import {createServer} from 'node:http';  

const server = createServer((req, res)=> {
    console.log('req recieved')

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');

    res.end("<html><body><h1>Hello</h1></body></html>")
});

server.listen(3000, () => {
    console.log(`server running at port http://localhost:3000`);
}); 



