//this tells about current situation
const user = {
  user_name: "Walid",
  price: 999,
  wellcome_message: function () {
    console.log(` ${this.user_name} ,wellcome to website`);
    // console.log(this);
  },
};
// in furure user_name may be changed by other developer that's why we need have to use (this)
// user.wellcome_message();
user.user_name = "Sarker";
// user.wellcome_message();
// console.log(this); // refer empty in node but gives window in console
var chai = function () {
  let username = "walid";
  console.log(`${this.username}`);
}
chai();
// ans is undefined
const chai1 = function(){
  let username = "walid";
  console.log(this.username);
};
// chai();
// ans is undefined
const chai2 = () => {
  let username = "walidsarkerishere";
  console.log(this.username);
};
// chai();
const number = (num1,num2) => {
  return num1 + num2;
};
const number_two = (num1,num2) => (num1 + num2) //implicite return
// console.log(number_two(3,4))