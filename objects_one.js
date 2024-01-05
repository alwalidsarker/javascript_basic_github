// Object.create(); //makes single tone
const mySymbol = Symbol("key-1"); //symbol data type
const newSymbol = Symbol("wlaid is here my boy");
const jsUser = {
  name: "walid sarker",
  age: 16,
  [mySymbol]: "walid", //define a symbol in an object (interview question)
  "full name": "Al Walid Sarker",
  location: "Bangladesh",
  Emain: "walidsarker.com@gmail.com",
  isLogIn: false,
  lastLogIn: ["monday", "saturday"],
};
console.log(jsUser);
//console.log(jsUser.lastLogIn);
// console.log(jsUser["full name"]);//(best rule to define) //we are giving this as string because in top one it is regarded as a string in that object
// console.log(jsUser["location"]);//(best rule to define) //we are giving this as string because in top one it is regarded as a string in that object
//console.log(jsUser[mySymbol]);
// Object.freeze(jsUser); //we have to freeze the whole object not a value of an object
// jsUser.name = "ragib";
// console.log(jsUser);
jsUser.greetings_one = function () {
  console.log("wellcome js user");
}; // by this we can add a value in an object
// console.log(jsUser.greetings_one()); //in past if we freeze that (js user object) it will show it is not a function, so we have to remove that
jsUser.greetings_two = function () {
  console.log(`wellcome js user,${this.name}`);
};
console.log(jsUser.greetings_two());
