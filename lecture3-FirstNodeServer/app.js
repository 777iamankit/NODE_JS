// const http=require('http');

// function requestListener(req,res){
//   console.log(req);
// }

// http.createServer(requestListener);
const http=require('http');
const server=http.createServer((req,res)=>{
  console.log(req);

  });

  const PORT=3000;
  server.listen(PORT,()=>{
    console.log(`server running on address https://localhost:${PORT}`);
  });