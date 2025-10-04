// COMPILE TIME ERROR

// console.log(1;


// RUN TIME ERROR

console.log(x);



// HANDLING(TRY CATCH BLOCK)


try {
    console.log("TRY BLOCK STARTS HERE");
    console.log(x);
    console.log("TRY BLOCK ENDS HERE");
}

catch (err){

    console.log("I AM INSIDE INSIDE BLOCK")
    console.log("YOR ERROR IS HERE:" , err)
}



//FINALLY BLOCK


try {
    console.log("TRY BLOCK STARTS HERE");
    console.log(x);
    console.log("TRY BLOCK ENDS HERE");
}

catch (err){

    console.log("I AM INSIDE INSIDE BLOCK")
    console.log("YOR ERROR IS HERE:" , err)
}

finally{

    console.log("I WILL RUN EVERYTIME, AS I AM FINALLY BLOCK")
}


//CREATE A CUSTOM ERROR (USING THROW KEYWORD)



try {
    console.log(x);
}

catch {
    throw new Error ("BHAI PEHLE DECLARE KARO FIR PRINT KARNA")
}


let errorCode=100;
if(errorCode==100){
    throw new Error("INVALID JSON")
}