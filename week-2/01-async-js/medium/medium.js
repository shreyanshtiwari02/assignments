//task -1
// const fs = require('fs')
// const path = './test.txt'
// trimmedStr="";

// fs.readFile(path, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   // Log the contents of the file to the console
//   trimmedStr = data.replace(/\s+/g, ' ').trim();
//   fs.writeFile(path, trimmedStr, 'utf8', (err)=> {
//     if (err) {
//       console.error('Error writing to file:', err);
//       return;
//     }
//     console.log('File has been written successfully.');
//   })
// });
// console.log(trimmedStr)


//2-clock
// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

for(let i=0; i<30 ;i++){
  setTimeout( () =>{
    currDate = new Date()
    // console.log(currDate.toLocaleTimeString())
    console.log(  currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds() + " " + (currDate.getHours() > 12 ?  "AM": "PM")        )

    
  }   , i*1000) 
}















