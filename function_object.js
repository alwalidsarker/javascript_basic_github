function calculateCardPrice(...productOne) {
  return productOne;
} //... is called the rest operator in javascript
console.log(calculateCardPrice(20,30,60,70));
function games(om1, om2, ...num1) {
  return num1;
}
//console.log(games(20,20,2,7,8,5,4,3)); // ans 20,20 (bescause om1, mo2 get the value of 20 and 20 sequentally) will be cut and rest will apprear in array as a result of the function
// upper one is an interview question
const user = {
  username: "Al Walid Sarker",
};
function user_cart(any_name) {
  console.log(`Username is ${any_name["username"]}`);
}
//user_cart(user);
const my_new_array = [23, 4, 5, 6, 7, , 8, 8, 6, 5, 4];
function make_value(get_array) {
  return get_array[2];
}
//console.log(make_value(my_new_array));