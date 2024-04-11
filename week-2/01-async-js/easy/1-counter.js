// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

// function incrementCounter() {
//   let currentDate = new Date();
//   console.log(currentDate);
// }

// // Increment the counter every second
// let intervalId = setInterval(incrementCounter, 1000);

// for(let i =0 ; i<10;i++){
//   setTimeout(() => console.log(i), i*1000)
// }

console.log("Start");

setTimeout(() => {
  console.log("Inside setImmediate callback after on");
}, 1);

setTimeout(() => {
  console.log("Inside setImmediate callback");
}, 0);

console.log("End");

console.log("End");
console.log("End");
