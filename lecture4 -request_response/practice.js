const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    
    res.setHeader('Content-Type','text/html');

    
  if(req.url==='/home'){
    res.write('<h1>welcome to Home</h1>');
    return res.end();
  }else if(req.url==='/men'){
    res.write('<h1>welcome to mens page </h1>');
    return res.end();
  }else if(req.url==='/women'){
    res.write('<h1>welcome to women page</h1>');
    return res.end();
  }else if(req.url==='/kid'){
    res.write('<h1>welcome to kid page</h1>');
    return res.end();
  }else if(req.url==='/cart'){
    res.write('<h1>welcome to cart page</h1>');
    return res.end();
  }

    res.write(`
      <html lang="en">
<head>
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Mens</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kid">kids</a></li>
        <li><a href="/cart">cart</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>
      `);
  res.end();

});

server.listen(3001,()=>{
console.log(`server running at http://localhost:3001`);
});