const tinderUser = new Object();
tinderUser.id = "abcd";
tinderUser.name = "Walid";
tinderUser.isLoggedIn = true;
// console.log(tinderUser);
const realUser = {
  email: "maxx@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Walid",
      lastName: "Sarker",
    },
  },
};
// console.log(realUser.fullName.userFullName.firstName);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = {obj1,obj2};
// console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2,obj3); // to merge objects  {} in here is an optional parameter
const obj5 = { ...obj1, ...obj2,...obj3};
// console.log(obj4);
// console.log(obj5);
var keys = Object.keys(realUser); // to get keys of an object also this treats keys as elements of an array
var values = Object.values(realUser); // to get values of an object also this treats values as elements of an array
var entries = Object.entries(realUser);
// console.log(realUser.hasOwnProperty("email"));
// console.log(keys);
// console.log(values);
console.log(entries);