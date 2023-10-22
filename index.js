// console.log('hello');
// const localIsEven = require('./is-even');
// const result = localIsEven.isNumberEven(48);
// console.log('res = ', result);
// const isOdd = require('./is-odd')
// console.log('isOdd', isOdd(33))
/////////////////////////////////////////
//console.log('start reading index.html')
const fileSystem = require('fs');

// const whatToDoWhenReadingIsReady = (error, result)=>{
//     if(error) {
//         console.log(error.message);
//     } else {
//         console.log('file content = ', result)
//     }
// }


//console.log('after starting reading index.html')

const http = require('http');

const requestHandler = (request, response) => {
    const url = request.url;
    if(url === '/') {
        fileSystem.readFile(
            './index.html', 
            'utf-8',
            (error, fileContent) => {
                response.writeHead(200, {"Content-Type": 'text/html'});
                response.write(fileContent);
                response.end();
            }
            );
    } else if(url === '/students') {
        fileSystem.readFile(
            './students.html', 
            'utf-8',
            (error, fileContent) => {
                response.writeHead(200, {"Content-Type": 'text/html'});
                response.write(fileContent);
                response.end();
            }
            );
    }
    else if(url === '/now') {
                const pageContent = '<h3>Today is</h3>' + new Date().toLocaleTimeString();
                response.writeHead(200, {"Content-Type": 'text/html'});
                response.write(pageContent);
                response.end();
    }
     else {
        response.end();
    }
}

const server = http.createServer(requestHandler)

server.listen(4200);
console.log('my server started')


