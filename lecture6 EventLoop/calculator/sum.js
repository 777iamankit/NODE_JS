const sumRequestHandler=(req,res)=>{
  console.log("In sum request Handler",req.url);
  const body=[];
  let result;
  req.on('data',chunk=>{
    console.log("2.chunk came");
    body.push(chunk);
  });
  req.on('end',()=>{
    console.log("3.end event came");
    const bodyStr=Buffer.concat(body).toString();
    const params=new URLSearchParams(bodyStr);
    const bodyObj=Object.fromEntries(params);
    result=Number(bodyObj.first)+Number(bodyObj.second);
    console.log(result);
 
  });
  console.log("4.sending the response");
  res.setHeader('content-type','text/html');
  res.write(`
   
    <html>
   <head>
   <title>Practice Set</title>
   </head>
   <body>
   <h1>your result is ${result}</h1>
   </body>
   </html>

   
   `);
   return res.end();

}

exports.sumRequestHandler=sumRequestHandler;