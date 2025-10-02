let obj = {
name:"vedansh",
age:20,
weight:70,
height:"6ft",
greet:function(){
    console.log("kese ho aap log")
}

};

console.log(obj)
obj.greet ();
console.log(typeof(obj))


let arr1= [1,2,3,4,5];

let brr= new Array (1, 2 ,"vishu" , true);


brr.push ("saini")

brr.pop();
brr.shift()
brr.unshift("vedansh saini")
brr.push(50,60,70,80,)

console.log(brr.slice(2,4))

brr.splice(3,7, "vedik")
console.log(brr);

console.log(typeof(brr))

console.log(brr[3])


console.log(brr)


let arr= [10 ,20, 30];


arr.map((number,index) => {

    console.log(number+1);
    console.log(index);
})


arr.map((number , index) => {
    console.log(number*2);
    console.log(index);
})


arr.map ((number , index)=>{
    console.log(number/2);
    console.log(index)
})


let ansArray=arr.map ((number)=>{
    return number*number
})

console.log(ansArray)


let ansArray1= arr.map((number) => {
    return number*number; }
)

console.log(ansArray1)      


let arr2=[10,20,30,11,21,44,51]

let evenArray=arr.filter((number)=> {

    return number%2==0

    // if  (number%2==0){
    //     return true;}
    
    // else {return false;}

});
console.log(evenArray)



let arr3=[1 ,2, "vishu", null]
let ans1= arr.filter ((value)=>{
    if (typeof(value)=== "string"){
        return true
    }
    else {return false}
});

console.log(ans1);



let arr4=[1,2,3, "vedansh" , null]
let ans2=arr.filter((value) =>{
    if(typeof(value) ==="number"){
        return true}

else{return false
}    
})

console.log(ans2)


let arr5= [10,20,,30,40]
let ans3= arr.reduce((acc,curr)=>{
    return acc+curr
}, 0)

console.log(ans)



let arr6=[100 , 200 , 300 , 400]
let ans=arr.reduce((acc , curr)=>{
    return acc+curr
} , 0)
console.log(ans)


let arr7=[9,1,7,4,2,8]
arr.sort();
console.log(arr7)


let arr8=[9,1,7,4,2,8]
arr.sort();
arr.reverse();
console.log(arr8);

console.log(arr8.indexOf(9));


let arr9=[10,20,30];

let length=arr.length;
console.log("length:", length );


arr.forEach((value,index)=>{
    console.log("Number:" , value , "Index:", value) 
})


for (let index=0 ; index < length; index++)
{console.log(arr[index]);
}


let obj1= {
name:"vedansh",
age:20,
weight:70,
height:"6ft",
greet:function(){
    console.log("kese ho aap log")
}

};

for (let key in obj){
    console.log(key, " ", obj[key])
}


let arr10=[100,200,,300]
for (let value of arr){
    console.log(value)
}


let fullName="VEDANSH"
for (let value of fullName){
    console.log(value)
}


let arr11=[10,20,30,40,50];

function getSum(arr){
    let len = arr.length;
    let sum = 0;
    for (index=0 ; index<len ; index++){
        sum= sum + arr[index];
    }
    return sum;
}

let totalSum1=getSum(arr)
console.log(totalSum)




let arr12=[10,20,30,40,50];

function getSum(arr) {
    let sum=0 ;
    arr.forEach((value) =>{
        sum=sum+value;

    })
    return sum
}

let totalSum2=getSum(arr)
console.log(totalSum)



let arr13=[10,20,30,40,50];

let  getSum=(arr)=> {
    let sum=0 ;
    arr.forEach((value) =>{
        sum=sum+value;

    })
    return sum
}

let totalSum=getSum(arr)
console.log(totalSum)



