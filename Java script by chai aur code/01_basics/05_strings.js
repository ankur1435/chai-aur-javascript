const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
console.log(gameName.__proto__);// __proto__ is a reference to the object's prototype , __proto__ shows all built-in string methods available to the String object
Object.getPrototypeOf(obj); // this and above to use proto is same




// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
// at the above line one thing for remember which is -8 
console.log(gameName.slice(3, 3));  // ""
console.log(anotherString);// slice(-8, 4): -8 means start 8 chars from end (12 - 8 = 4), so slice(4, 4) → returns ""
 

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));




// 'text' → primitive string (recommended)
// new String('text') → object, avoid unless needed
