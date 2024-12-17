// const http=require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');


//const server=http.createServer(
 const userRequestHandler= (req,res)=>{
 console.log(req.url,req.method);
 if(req.url==='/'){
    
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>NODE JS WITH ME</title></head>')
  res.write('<body><h1>Enter your Details</h1>');
  res.write('<form action="/submit-details" method="pOST">');
  res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
  res.write('<label for="male">Male</label>');
  res.write('<input type="radio" id="male" name="gender" value="male">');
  res.write('<label for="female">Female</label>');
  res.write('<input type="radio" id="female" name="gender" value="female">');
  res.write('<br><input type="submit" value="Submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
 return res.end();
 
 }else if(req.url.toLocaleLowerCase()==="/submit-details" && req.method==="POST"){

  const body=[];
  req.on('data',chunk=>{
    console.log(chunk);
    body.push(chunk);
  });
  req.on("end",()=>{
  const fullBody=  Buffer.concat(body).toString();
  console.log(fullBody);

  const params=new URLSearchParams(fullBody);
  // const bodyObject={};
  // for(const [key,val] of params.entries()){
  //   bodyObject[key]=val;
  // }
  //other method
  const bodyObject=Object.fromEntries(params);
  console.log(bodyObject);
  fs.writeFileSync('user.txt',JSON.stringify(bodyObject));

  });

  res.statusCode=302;
  res.setHeader('Location','/');
 }

 
   
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>NODE JS WITH ME</title></head>')
  res.write('<body>helllo NODE JS</body>');
  res.write('</html>');
 return res.end(); 



};


module.exports=userRequestHandler;
// const PORT=3002;
// server.listen(PORT,()=>{
// console.log(`server runnig on http://localhost:${PORT}`);
// });

