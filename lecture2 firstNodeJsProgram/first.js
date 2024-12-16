console.log("I am the best");
const fs=require('fs');
fs.writeFile("output.txt","Writing FIle",(err)=>{
  if (err) console.log("error");
  else console.log("File written successfully");
})