function sayMyName () {
    console.log("vedansh saini")
}

 sayMyName ();   


function printCounting (){

    for (let i=1 ; i<=100 ; i++)
    {
        console.log(i)
    }}

    printCounting ();


function printNumber (num){
    console.log(
        "Printing Number:" , num
    );
}

printNumber (9)





function getAverage(num1, num2){
    let avg= (num1 + num2)/2;
    console.log("Average:" , avg);
}

getAverage (11,10)



// // return functions


function getSum(a,b,c){
   let sum = a+b+c;
   return sum; 
}

let ans = getSum(1,2,3);
console.log("PrintingSum: ", ans);


function getMyName(firstName , lastName) 
{
    let fullName= (firstName + " " + lastName);                     
return fullName;
}
let fullName = getMyName ("Vedansh" , "Saini")
console.log("Full Name:", fullName)


function getMultiplication(a, b){
    return a*b;
}

console.log(getMultiplication(5,5))


let squareNumber= function(num){
    let ans = num**2

return ans;}


let  squareNumber2 = function (num){
    let square=num**10
    console.log("SQUARE:" , square)
}

squareNumber(2)

let and =squareNumber(5);
console.log(ans)


function getExp(x,y) {
    let ans=x**y;
    return ans;
}
console.log(getExp (2, 10))



let getExp = function(x,y)
 {   let ans=x**y;
    return ans;
}
console.log(getExp(2, 10))



let getExp = (x,y) =>
 {   let ans=x**y;
    return ans;
}
console.log(getExp(2, 10))

