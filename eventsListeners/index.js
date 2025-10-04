//EVENT TARGET

function changeText(){
    let fpara=document.getElementById("fpara");

fpara.textContent="HELLO JAVASCRIPT"

};
    let fpara=document.getElementById("fpara");
fpara.addEventListener("click" , changeText);



// let fpara=document.getElementById("fpara");
// fpara.addEventListener("click" , function changeText(){

//     let fpara=document.getElementById("fpara");
//     fpara.textContent="HELLO JAVASCRIPT"

// });



// // EVENT OBJECT

function changeText(event){
    console.log(event);
let fpara=document.getElementById("fpara")

fpara.textContent="HELLO JAVASCRIPT"
}

let fpara1=document.getElementById("fpara")

fpara.addEventListener("click" , changeText)



// // DEFAULT ACTION

let anchorElement=document.getElementById("fanchor")

anchorElement.addEventListener("click" , function(event){
    event.preventDefault()
    anchorElement.textContent="CLICK DONE BHAI"
});




// function changeText(event){
    

// let anchorElement=document.getElementById("fanchor")

// anchorElement.textContent="YAHA PE CLICK KRO"
// }

// let anchorElement=document.getElementById("fanchor")
// anchorElement.addEventListener("click" , changeText)





let paras=document.querySelectorAll("p");

for (let i=0 ;i<paras.length ; i++){
    let para=paras[i]
    para.addEventListener("click" , function(){
        alert("you have clicked on para: " + (i+1))
    })
}



// let paras=document.querySelectorAll("p");
// function alertPara(event){
//         alert("you have clicked on para: " + event.target.textContent);
// }
// for (let i=0 ;i<paras.length ; i++){
//     let para=paras[i]
//     console.log("addEventListener")
//     para.addEventListener("click" , alertPara);
// }



let mydiv=document.getElementById("wrapper")
function alertPara(event){
    alert("you have clicked on para: " + event.target.textContent);
}

document.addEventListener("click" , alertPara);






// let mydiv=document.getElementById("wrapper")
// function alertPara(event){
//     if(event.target.nodeName === "SPAN") {
//         alert("you have clicked on para: " + event.target.textContent);
// }
// }
// document.addEventListener("click" , alertPara);






