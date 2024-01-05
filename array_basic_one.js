// const myArray = [1,2,3,4,5,6,7,8];
const hero = [0, "jhane", "supermain", "Ana De Armas", "ironman"];
const mainName = new Array("cris hemsworth", "nicola portman", "henry cavils");
hero.push("walid");
hero.pop();
// removes the last value of an array
hero.unshift(0);
// add things in the first of an array
hero.shift(0)
console.log(hero.includes("thor"));
// tells that it really exists in an array or not
console.log(hero.indexOf("jhane"));
const names = hero.join();
console.log(names);
console.log(names.substring(2,7));
// type of (names) is string
console.log(typeof(hero));
// (hero) is an object
// (slice / splice)
console.log("A", hero);
let newOne = hero.slice(1,4);
let newTwo = hero.splice(1,4);
//main diffrence bettwen slice and splice is that splice make a new array from the parent array
console.log(newOne);
console.log(newTwo);
// tips :
// 1st => unshift to add, shift to remove first
// 2nd => push to add last, pop to remove last