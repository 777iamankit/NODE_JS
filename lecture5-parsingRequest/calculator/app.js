const http=require('http');
const requestHandler=require('./handler')

const server=http.createServer(requestHandler);

PORT=3000;
server.listen(PORT,()=>{
  console.log(`server is running on address http://localhost:${PORT}`);
});