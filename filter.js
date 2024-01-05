let friends_name = ["Walid", "Sifat", "Najmus", "Redone"];
// const values = friends_name.forEach((item) => {
//   console.log(item);
//   // return item;
// });
// console.log(values); //gives undefined because it doesn't return any values
const number = [1,2,3,4,5,6,7,8,9,10];
let small_numbers = number.filter( (num) => num <= 5); // return the value
let big_numbers = number.filter((val) => {return val > 5});
// console.log(small_numbers);
// console.log(big_numbers);
let new_orders = [];
small_numbers.forEach((num) => {
  if(num < 10){
    new_orders.push(num);
  };
});
// console.log(new_orders);
let super__heros = [{
  name_hero : "Thor",
  power : "hammer and Thunder",
  "Girlfriend" : "Jhne Foster",
},{
  name_hero : "Superman",
  power : "Bimal",
  "Girlfriend" : "None",
},{
  name_hero : "Loki",
  power : "Time control",
  "Girlfriend" : "None",
}];
let main_ones = super__heros.filter((info) => {
  return info["power"] === "hammer and Thunder" && info.power === "none";
});
// console.log(main_ones);