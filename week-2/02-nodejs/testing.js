const fs = require('fs')
fs.readdir('files', (err,files) =>{
  if(err) throw err;
  console.log(files)
})