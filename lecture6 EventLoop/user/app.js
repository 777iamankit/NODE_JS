const http=require('http');
const requestHandler=require('./user');
const server=http.createServer(requestHandler);


const PORT=3002;
server.listen(PORT,()=>{
console.log(`server runnig on http://localhost:${PORT}`);
});
