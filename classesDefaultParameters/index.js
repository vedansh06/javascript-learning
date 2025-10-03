class Human {
    //properties
age=20;   //public
#wt=80;    //private
ht=180;
//behavior

walking(){
 console.log("i am walking" , this.#wt)
}

running(){

    console.log("i am running")
}
}

let obj= new Human ()
    console.log(obj.ht)


    obj.walking ();



//GETTER & SETTER

    class Human {

    //properties

age=20;   //public
#wt=700;   //private
ht=180;

//behavior

walking(){
 console.log("i am walking" , this.#wt)
}

running(){

    console.log("i am running")
}

get fetchWeight (){
    return this.#wt
}

set modifyWeight (val){
    return this.#wt=val
}
}

let obj2= new Human ()
    console.log(obj.ht)


    obj.walking ();


// CONSTRUCTOR

     class Human {

    //properties

age=20;   //public
#wt=700;  //private
// ht=180;



constructor(newAge , newHeight, newWeight)
{
    this.age=newAge
    this.ht=newHeight
    this.#wt=newWeight

}
    


// //behavior

walking(){
 console.log("i am walking" , this.#wt)
}

running(){

    console.log("i am running")
}

get fetchWeight (){
    return this.#wt
}

set modifyWeight (val){
    return this.#wt=val
}
     }
let obj1= new Human (1010 , 2020 , 3030)
    console.log(obj.fetchWeight)


    obj.walking ();





//DEFAULT PARAMETERS



    function sayMyName(myName){
        console.log("MY NAME IS:" ,myName )
    }

    sayMyName("VEDANSH SAINI");



     function sayMyName(myName = "VISHU SAINI"){
        console.log("MY NAME IS:" ,myName )
    }

    sayMyName();



     function sayName(fName, lName){
        console.log("MY NAME IS: " , fName, " " ,lName);
    }

    sayName("VEDANSH" , "SAINI");



    function sayName(fName="UDAY", lName="SINGH"){
        console.log("MY NAME IS: " , fName, " " ,lName);
    }

    sayName("VEDANSH");



    function sayName(fName="uday", lName=fName.toUpperCase()){
        console.log("MY NAME IS: " , fName, " " ,lName);
    }
    
    sayName();



    // DEFAULT PARAMETERS (OBJECT)


    function solve (value=1500) {
        console.log("HELLO JI" , value)
    }


    solve ()



        function solve (value={age:15 , wt:20 , ht:25}) {
        console.log("HELLO JI" , value)
    }


    solve ()


        //DEFAULT PARAMETERS (ARRAYS)
        
        function solve (value=["KUNAL" , "RAHUL" , "MOHAN"]) {
        console.log("HELLO JI" , value)
    }


    solve ()


        //DEFAULT PARAMETERS (NULL & UNDEFINED)


   function solve (value="MOHAN") {
        console.log("HELLO JI" , value)
    }

    solve (null)



       function solve (value="MOHAN") {
        console.log("HELLO JI" , value)
    }

    solve (undefined)




            //DEFAULT PARAMETERS (FUNCTIONS)


           function getAge (){
            return 200;
           } 


           function utility (name="VEDANSH" , age=getAge()){
            console.log(name ," " , age)
           }

           utility ()