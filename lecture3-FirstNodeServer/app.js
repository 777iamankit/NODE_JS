// const http=require('http');

// function requestListener(req,res){
//   console.log(req);
// }

// http.createServer(requestListener);
const http=require('http');
const app=http.createServer((req,res)=>{
  console.log(req);
  });

  const PORT=3000;
  app.listen(PORT,()=>{
    console.log(`server is running at https://locahost:${PORT}`);
  });