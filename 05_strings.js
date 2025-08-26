const name = "ansh"
const count = 50
// console.log(name + count +" value");

console.log(`Hello my name is ${name} and count is ${count}`);

const gameName = new String('Ansh-si')
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString=gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6,2)
console.log(anotherString);

const newStringOne = "  Ansh  "
console.log(newStringOne);
console.log(newStringOne.trim()); //mdn


const nam = "Anshu";
console.log(nam.replace('u', '-'));
console.log(nam.includes('atr'));
console.log(gameName.split('-')); // mdn









