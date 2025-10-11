function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);

  console.log("Namaste Javascript");
}
x();


function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Namaste Javascript");
}
x();


function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Namaste JS");
}
x();


console.log("start");

function cd(){
  console.log("callback");
}
cb()

setTimeout(function cb() {
  console.log("callback");
}, 0);

console.log("end");


//million

let startDate = new Date ().getTime();
let endDate = startDate;
while (endDate<startDate + 10000) {
  endDate = new Date().getTime();

}

console.log("While Expires");
