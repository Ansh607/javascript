// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol-> it is used to make unique of the website, BigInt

// const score = 100
// const scoreValue = 200.9 // number

const isLoggedIn = false // boolean
// console.log( typeof isLoggedIn);

const outsideTemp = null // null
let userEmail; // undefined


const id = Symbol('123') // symbol
const anotherId = Symbol('123')
//   console.log(id == anotherId);
  // console.log(typeof anotherId);
  

const bigNumber = 233553656587n 
//  console.log(bigNumber); // bigint


// Reference Type(Non  primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
 let myObj = {
    name: "Ansh",
    age: 23,

}

const myFunction = function(){
    // console.log("HW");
    
}

// console.log(typeof myFunction);







//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap (Non-primitive)

let myYoutubename = "Anshdotcom"
let anothername = myYoutubename
anothername = "rajeev"
console.log( myYoutubename);
console.log(anothername);
let userOne = {
  email: "user@google.com",
  upi: "user@ok"
}

let  userTwo = userOne

userTwo.email = "ansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//Note->
// stack ke under jo bhi changes karte hai to uski ek copy milti hai, but jab hm changes heap ke under karte hai, to hame uska ek original value milti hai.








