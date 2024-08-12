//Two types of DataTypes:
//Primitive : call by value it give the copy of original and changes made in that copy

//7 Types :
    /*
    String
    Number
    Booleans
    null
    undefined
    symbol
    BigInt
     */

//Non-Primitive  : Refernce it directly give the refernce in memory
    /*
          Array
          Objects
          Function
    */

//Javascript is a dynamicall typed language not static because vairable hold value of differnt type during runtime

const score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmail ;

const id = Symbol("123")
const anotherid = Symbol('123')
console.log(id==anotherid);
//here we have to note that mention id and anotherid is differnt because Symbol Returns a new unique Symbol value.

const bigNumber = 123435678976545678654567543n
console.log(typeof bigNumber);


//======>Non-Primitive<=======

//Array
const fruits = ["apple","orange","mango"];

//Object
let myObj ={
    name : "doga",
    age: 22,
}

//Function
const myFunction = function(){
    console.log("OHOOOO");

    
}
console.log(typeof fruits);
console.log(typeof myObj);
console.log(typeof myFunction);


//====================>Memory<====================

//Stack(Primitive)change in copy not chnage in original value
//Heap(Non-Prirmitve)




let myname = "doga"
let anothername = myname
anothername = "doga_the_software Engineer"
console.log(myname);
console.log(anothername);

let userOne ={
    email : "user@xyzname",  //inside heap it give the referance
    upi : "user@ybi"
}

let userTwo = userOne
userTwo.email = "doga@xyzname" 
console.log(userOne.email);
console.log(userTwo.email);


