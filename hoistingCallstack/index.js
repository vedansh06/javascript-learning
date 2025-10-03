sayMyName("vedansh")

function sayMyName(finalName){

    console.log(finalName)
}

console.log(age)
var age=25;



console.log(age)
let age=50;


console.log(age)
const age=50;


sayHello()

   let sayHello =function (){
    console.log("hello ji kese ho saare")
}


sayHello()

   function sayHello  (){
    console.log("hello ji kese ho saare")
}



const object1= new Human ()
class Human {
}

let greet=function  (){
    console.log("greeting of the day")
}

greet()



function greetMe (greet , fullName){
    console.log("HELLO" , fullName)
    greet();
}


function greet  (){
    console.log("Greeting Of The Day")
}

greetMe(greet , "SAINI")




function solve(number){
    return function (number)
    {
        return number*number;
    }
}

let ans1 = solve(5);

let finalAns=ans1 (10);
console.log(finalAns);  

const arr=[
    function (a,b){
        return a+b
    },

     function (a,b){
        return a-b
    },

     function (a,b){
        return a*b
    }
];

let first = arr[2];
let ans= first(5,10);
 console.log(ans); 


let obj={
    age:25,
    ht:180,
    wt:36,
    greet:()=>{
        console.log("hello dunia")
    }}


console.log(obj.age)
obj.greet()

greet()
let greet=function(){
    console.log("namaste dunia")
}










