if (true) {
  var walid = "main";
  let sijan = "cow";
  const musfik = "dog";
}
// console.log(walid); // will be printed though it has a local scope
// console.log(sijan);
// console.log(musfik);
// console scope and NODE environment work opposite of both
function one() {
  const userName = "Walid";

  function two() {
    const web_site = "YouTube";
    console.log(userName);
  }

  // console.log(web_site); gives error

  // two();
}
one();
if (true) {
  const user_name = "Walid Sarker";
  if (user_name === "Walid Sarker") {
    const web_site = " YouTube";
    console.log(user_name + web_site);
  }
  // console.log(web_site); error
}
// console.log(user_name); error
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++= interesting+++++++++++++++++
// add_one(5); i can write this because i am giving a value first then declaring the function so it is legal
function add_one(num) {
  return num + 1;
}
// add_two(); error because this function is stored in a variable and i call it very earlier that is why it's ans is (you ahve not called the variable)
const add_two = function (num) {
  return num + 1;
};
