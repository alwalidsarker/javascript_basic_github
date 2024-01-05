let number = [1, 2, 3, 4, 5];
let new_ones = number.map((val) => val + 6);
let new_ones_p = number.filter((val) => val < 6);
// console.log(new_ones); //ans is true
// console.log(new_ones_p);
// map is Used when you want to transform each element in an array
let my_own_ones = new_ones.map((val) => val + 4).map((val) => val + 10);
// console.log(my_own_ones);
let logic = [{ language_name: "JavaScript", langauage_use: "Web_Development" }];
let nxt_logic = logic.map((items) => (items.Inventor = "Walid Er"));
// console.log(logic);
//using map than again map is called chaining
//using map than again filter is called chaining
