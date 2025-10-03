let obj={
    age:19,
    wt:75,
    ht:180,
};

console.log(obj)

obj.color="black"
console.log(obj)


// OBJECT CLONING

// (SPREAD OPERATOR)

let src={
    age:19,
    wt:75,
    ht:180,
};

let dest={...src}


// // let dest=src;

// src.age=99
  

console.log("src:" , src);
console.log("dest:" , dest);



// (ASSIGN METHOD)

let src1={
    age:19,
    wt:75,
    ht:180,
};



let src2={

    value:1010,
    name:"vedansh saini"

};

let dest2=Object.assign({}, src1, src2)

// src.age=99


console.log("src:" , src2);
console.log("dest:" , dest2);



// (ITERATION METHOD)


let src3={
    age:19,
    wt:75,
    ht:180,
};

let dest3={};

// //cloning using iteration

for (let key in src){
    let newKey=key ;
    let newValue=src[key];

//     //insert newKey and value in dest and create a clone

    dest [newKey]=newValue;
}

// src.age=78

console.log("src:" , src3);
console.log("dest:" , dest3);




