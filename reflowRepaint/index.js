//CODE 1 

const t1=performance.now()

for( let i=1 ; i<=100 ; i++)

{ let para=document.createElement("p")
para.textContent="THIS IS PARA "  +  i;
document.body.appendChild(para);

};

const t2=performance.now()

console.log("total time by code1:" + (t2-t1));


//CODE 2

const t3=performance.now()


let mydiv=document.createElement("div");
 for(let i=1 ; i<=100 ; i++){

    let para=document.createElement("p");
    para.textContent="THIS IS PARA "  +  i;
mydiv.appendChild(para)

 }
 document.body.appendChild(mydiv);

 const t4=performance.now()
console.log("total time by code2:" + (t4-t3));



// BEST CODE

let fragment = document.createDocumentFragment();

for (let i=1 ; i<=100 ; i++)

{let para= document.createElement("p")
    para.textContent="THIS IS PARA " + i +1;

    // NO REFLOW AND NO REPAINT FOR THE BELOW LINE
    fragment.appendChild(para);

}

//THE BELOW LINE TAKES 1REFLOW AND 1 REPAINT
document.body.appendChild(fragment)