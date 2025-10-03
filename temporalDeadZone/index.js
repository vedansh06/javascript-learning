//  GLOBAL SCOPE

  var age=15;
let age=15;
 const age = 15;


console.log(age)

{console.log(age)}

if (true){
    console.log(age)
}

for(let i=0 ; i<2 ; i++)
{
    console.log(age)
}

function sayHello(){
    console.log("HI" , age)
}

sayHello()


//  FUNCTION SCOPE


function sayName(){
const name="earth";
    console.log("hello duniya" , name)
}

sayName()


// BLOCK SCOPE


{var height=180;}

console.log(height)



let weight=80;


// TEMPORAL DEAD ZONE


console.log(marks)
const marks=200;
