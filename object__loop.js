const my_obj = {
  js : "javascript",
  rb : "ruby",
  css : "cascading sheet style",
  "name" : "Al Walid Sarker"
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for in loop for object 
for(const keyh in my_obj){
  console.log(keyh); // gives the keys of an object
  // console.log(my_obj[`${key}`]);
};
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let array = ["js", "css", "html"];
// for(const key in array){
//   console.log(array[key]);
// };// for in works in arrays also
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const map = new Map();
// map.set("name","walid");
// for(const key in map){
//   console.log(key);
// };
// // for in doesnot work in map because it is (map) not ittretable
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++