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
console.log(Array.of(name, age)); //makes a new array by varible name or evnen by an array
console.log(Array.of(age,names));