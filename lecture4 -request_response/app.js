const http=require('http');


const server=http.createServer((req,res)=>{
   console.log(req.url,req.headers,req.method);
  if(req.url==='/'){
    
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>NODE JS WITH ME</title></head>')
   res.write('<body>welcome to the home page</body>');
   res.write('</html>');
  return res.end();
  }else if(req.url==='/product'){
    
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>NODE JS WITH ME</title></head>')
   res.write('<body>Looking for the product</body>');
   res.write('</html>');
  return res.end();
  }else{
    
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>NODE JS WITH ME</title></head>')
   res.write('<body>helllo NODE JS</body>');
   res.write('</html>');
  return res.end();
  }



   
});

const PORT=3001;
server.listen(PORT,()=>{
console.log(`server running on http://localhost:${PORT}`);
});