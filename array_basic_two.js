const marvel_hero = ["thor", "ironman", "spiderman"];
const dc_hero = ["superman", "flash", "batman"];
marvel_hero.push(dc_hero); // adds a arry in an array
const combine = marvel_hero.concat(dc_hero);
//we have to store this in a variable beacause it gives a new array and marges also
const all_hearo = [...marvel_hero, ...dc_hero]; //works as a concat method and used most because we can add many array in it
const new_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_one = new_array.flat(1);
// console.log(real_one);
// console.log(new_array[5][2][1]);
// console.log(Array.isArray(real_one)); //from this we check an array weather it is true or false
// console.log(Array.from("walid")); //makes a array ans[w,a,l,i,d]
// console.log(Array.from({ age: 5 })); //gives an empty array (interview question)
var name = "walid";
var age = 8;
const names = ["walid","walid2","walid3"];
// console.log(Array.of(name, age)); //makes a new array by varible name or evnen by an array
// console.log(Array.of(age,names));
//array sorting is here
let food = ['banana','apple','mango'];
// food.sort();
// console.log(food); //sort generally ordarizes the array in alphabetic form and also changes the root array
// food.reverse(); //reverse generally ordarizes the array in alphabetic form in reverse order and also changes the root array but we have to make suer that in the previous line we are usning [arrayName].sort(); method;
// console.log(food);

/* note : if we use (just) .sort() in a number type array here "20" will be bigger than "1000" because 2>1*/
//to solve this (or using sort in number type array)

let sortArrNum = [1,2,6,7,8,3,4,6,9];
sortArrNum.sort(function(x,y){
  return x - y;
  // here this sort will run in pair for all the element in that [array]
  // than is the 1st pair 1,2 => 1 - 2 will be (-1) so this is considared as false value so javascript will think 2 as bigger than 1
});
// sortArrNum.reverse()
console.log(sortArrNum);