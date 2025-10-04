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












