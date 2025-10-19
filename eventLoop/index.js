console.log("start");

setTimeout(function cb() {
  console.log("callback");
}, 5000);

console.log("end");


console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback");
});

console.log("End");


console.log("Start");

setTimeout(function cBt() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");

