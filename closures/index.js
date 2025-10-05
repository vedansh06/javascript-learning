function outerFunction() {
let name = "Vedansh"; // let -> block scope

function innerFunction() {

// let name="Saini"
console. log(name); 
} 
innerFunction() ;
}
outerFunction();


    
function innerFunction(){
    let name1="VEDANSH"

function outerFunction(){
    console.log(name1)

}
return innerFunction;
}

let inner= outerFunction();
inner();
