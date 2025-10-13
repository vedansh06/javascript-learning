// PROMISE

let firstPromise=new Promise((resolve, reject) => {
    console.log("VEDANSH")
    resolve(1001);
});


let firstPromise2=new Promise((resolve, reject) => {
    console.log("VEDANSH")
    reject(new Error("Internal Server Error"));
});


// ASYNC CODE
 
function sayMyName(){
    console.log("VEDANSH SAINI")
}
setTimeout(sayMyName , 15000)


let firstPromise3=new Promise((resolve, reject) => {
    
function sayMyName(){
    console.log("VEDANSH SAINI")
}
setTimeout(sayMyName , 15000)
resolve(1111)
});


// THEN,CATCH

let promise1 = new Promise((resolve, reject) => {
    let success=true;
    if(success){
        resolve(10)
    }
    else{
        reject(-1)
    }
});


promise1.then((message)=>{
   console.log("first msg: " + message)
   return 20
}).then((message)=>{
    console.log("second msg: " + message)
    return 30
}).then ((message)=>{
    console.log("third msg: " + message)
})


promise1.then((message)=>{
    console.log("then ka message is " + message)
}).catch((error)=>{
    console.log("Error:" + error)
})



let promise2 = new Promise((resolve, reject) => {
    let success=false;
    if(success){
        resolve( "PROMISE RESOLVED")
    }
    else{
        reject("PROMISE REJECTED")
    }
});

promise2.then((message)=>{
    console.log("then ka message is " + message)
}).catch((error)=>{
    console.log("Error:" + error)
})


let promise3 = new Promise((resolve, reject) => {
    let success=false;
    if(success){
        resolve(10)
    }
    else{
        reject ("Internal Server Error")
    }
});

promise3.then((message)=>{
   console.log("first msg: " + message)
   return 20
}).then((message)=>{
    console.log("second msg: " + message)   
    return 30
}).then ((message)=>{
    console.log("third msg: " + message)
}).catch((error)=>{
    console.error(error);
})

// FINALLY

let promise4 = new Promise((resolve, reject) => {
    let success=false;
    if(success){
        resolve(10)
    }
    else{
        reject ("Internal Server Error")
    }
});

promise4.then((message)=>{
   console.log("first msg: " + message)
   return 20
}).then((message)=>{
    console.log("second msg: " + message)
    return 30
}).then ((message)=>{
    console.log("third msg: " + message)
}).catch((error)=>{
    console.error(error);
}).finally((message)=>{
    console.log("m toh final hu chalunga pakka he")
})


// MULTIPLE PROMISE


let promise5= new Promise((resolve, reject) => {
    setTimeout(resolve , 1000 , "FIRST")
});

let promise6= new Promise((resolve, reject) => {
    setTimeout(resolve , 2000 , "SECOND")
});
// 
let promise7= new Promise((resolve, reject) => {
    setTimeout(resolve , 4000 , "THIRD")
});

Promise.all([promise5 , promise6 , promise7])
.then((values)=>{
    console.log(values)
});



const cart1 = ["shoes", "pants", "shirts"];

const promise = createOrder(cart1); //!orderId
console.log(promise);

promise.then(function (orderId) {
  console.log(orderId)

  //todo proceedToPayment(orderId);

});

function createOrder(cart1) {
  const pr = new Promise(function (resolve, reject) {

    //!createOrder
    //*validateCart
    //?orderId

    if (!validateCart(cart1)) {
      const err = new Error("cart1 is not valid");

      reject(err);
    }

    //todo logic for createOrder

    const orderId = "12345";
    if (orderId) {
      setTimeout(function (){
      resolve(orderId);

      } , 5000)
    }
  });

  return pr;
}

function validateCart(cart1){
  return true;
}



const cart2 = ["shoes", "pants", "shirts"];

const promise10 = createOrder(cart2); //!orderId

promise10
  .then(function (orderId) {
    console.log(orderId);

    // todo proceedToPayment(orderId);
  })

  .catch(function (err) {
    console.log(err.message);
  });

//? producer

function createOrder(cart2) {
  const pr = new Promise(function (resolve, reject) {
    //!createOrder
    //*validateCart
    //?orderId

    if (!validateCart(cart2)) {
      const err = new Error("Cart is not valid");

      reject(err);
    }

    //todo logic for createOrder

    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart2) {
  return false;
}



const cart3 = ["shoes", "pants", "shirts"];

createOrder(cart3)
  .then(function (orderId) {
    console.log(orderId);
    return orderId
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId)
  })
    .then (function (paymentInfo){
    console.log(paymentInfo)
  })
   .then(function (orderId) {
    console.log("no matter what happens , i will definitely be called");
  })
  

//? producer

function createOrder(cart3) {
  const pr = new Promise(function (resolve, reject) {
    //!createOrder
    //*validateCart
    //?orderId

    if (!validateCart(cart3)) {
      const err = new Error("Cart is not valid");

      reject(err);
    }

    //todo logic for createOrder

    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId){

return new Promise (function (resolve , reject){
  resolve ("Payment Successful");
})

}

function validateCart(cart3) {
  return false;
}











