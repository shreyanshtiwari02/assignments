// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.
const fs = require("fs");

const path = "./test.txt";

//reading
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  // Log the contents of the file to the console
  console.log( data);
});

// for (let i = 0; i < 2000000000; i++){}

//writing to a file
fs.appendFile(path, "Hello, World!",'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }

  console.log('File has been written successfully.');
})