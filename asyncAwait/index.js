async function getData(){
    setTimeout(function (){
        console.log("I am inside set timeout block")
    } ,3000);
}

getData();


// AWAIT

async function getData2(){

    //get request- async
let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');

//parse json - async
let data= await response.json();

console.log(data);
}

getData2();



async function getData3(){
    //get request- async

let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//parse json - async

let data= await response.json();
console.log(data);
}

getData3();




const myHeaders = new Headers() ;
myHeaders.append ("Content-Type", "application/json") ;

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
     method: "POST",
body: JSON.stringify({ username: "Vedansh Saini"}),
headers: myHeaders,
}; 

async function getData(){
    const response = await fetch(url);
    let data = await response.json();
console.log("get data response: " , data)
}

async function postData(){

const response = await fetch(url,options);
let data = await response.json();
console.log("post data response: " , data)
}

async function processData(){
await postData();
await getData();
}

processData();




const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!!");
});


async function getData() {
  return "Namaste";
}

const data = getData();

console.log(data);


async function getData() {
  return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("Promise Resolved Value!!")
    } , 5000)
})


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("Promise Resolved Value!!")
    } , 10000)
})


//! await can only be used inside  an async function 

async function handlePromise (){
    console.log("Hello World")

//todo JS Engine was waiting for promise to resolved 

    const val = await p1;
    console.log("Namaste Javascript")
    console.log(val);

    const val2 = await p2;
      console.log("Namaste Javascript 2")
    console.log(val2);
}
handlePromise(); 


function getData(){

 //? JS Engine will not await for promise to be resolved

    p1.then((res) => console.log(res));
    console.log("Namaste Javascript")
}
getData()


const API_URL = "https://api.github.com/users/vedansh06"

async function handlePromise(){
   const data =  await fetch (API_URL);

    const jsonValue = await data.json();

    console.log(jsonValue)


    //todo fetch().then(res => res.json ()).then(res => console.log())
   //! fetch () => Response.json() => jsonValue   

}
handlePromise();


// const API_URL = "https://invalidrandomurl";
const API_URL2 = "https://api.github.com/users/vedansh06";

async function handlePromise(){
    try {
        const data = await fetch(API_URL2)
        const jsonValue = await data.json();
        console.log(jsonValue)
    } catch (err) {
        console.log(err)
    }
} 
handlePromise()




const API_URL3 = "https://api.github.com/users/vedansh06";

async function handlePromise(){
    
        const data = await fetch(API_URL)
        const jsonValue = await data.json();
        console.log(jsonValue)
}
   
handlePromise().catch((err) => console.log(err))
















