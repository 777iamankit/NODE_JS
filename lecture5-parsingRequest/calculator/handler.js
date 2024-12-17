const {sumRequestHandler}=require('./sum');


const requestHandler=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
    res.setHeader('content-type','text/html');
    res.write(`

      <html>
      <head>
      <title>Practice set</title>
      </head>
      <body>
      <h1>Welcome to Calculator</h1>
      <a href="/calculator">Go to the calculator</a>
      </body>
      </html>

      `);
    return res.end();
  }else if(req.url.toLowerCase()==='/calculator'){

    res.write(`
      
      <html>
    <head>
    <title>Practice set</title>
    </head>
    <body>
    <h1>Here is Calculator</h1>
    <form action="/calculate-result" method="POST">
      <input type="text" name="first" placeholder="first Num"/>
      <input type="text" name="second" placeholder="second Num"/>
      <input type="submit" value="sum"/>
    </form>
    </body>
    </html>

      `);
      return res.end();

  }else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
    return  sumRequestHandler(req,res);
   
  }


  res.setHeader('content-type','text/html');
  res.write(`
    
    <html>
      <head>
      <title>Practice Set</title>
      </head>
      <body>
      <h1>404 page doesnt Found</h1>
      <a href="/">Go to HOME</a>
      </body>
      </html>

    `);
    return res.end();
}

// exports.requestHandler=requestHandler;
module.exports=requestHandler;