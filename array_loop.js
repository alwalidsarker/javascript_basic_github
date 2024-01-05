//for of
const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const greetings = "Hello World";
for (const greet of greetings) {
    console.log(greet);
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const map = new Map(); // map is an object (unique values)
map.set("IN", "India");
map.set("BD", "Bangladesh");
map.set("USA", "United States of America");
map.set("USA", "United States of America"); // it will not be adding because it doesn't allow to contain two entries at a time
// console.log(map);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
for (const map_loop of map) {
    console.log(map_loop);
}; // ans is in array
// if i only want values from that map_loop then i have to do this follwing steps
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
for (const [map_loop_next, values] of map) {
    console.log(map_loop_next);
    console.log(values);
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const my_obj = {
    fname : "walid",
    "game_one" : "pubg",
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for (const new_obj of my_obj) {
//     console.log(new_obj);
//}; // will not work (for of does not support this)
// the end
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const names_friends = new Map();
names_friends.set("One :","Sijan Sarder");
names_friends.set("Two :","Walid Sarker");
names_friends.set("Three :","Najmus Sadat Hossain");
for (const [new_names_map,values] of names_friends ) {
    // console.log(values);
    console.log(new_names_map,values);
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for each
// for each doesn't return any values 

const food = ["burger", "pizza", "biriyani", "mutton"];
food.forEach((items) => {
    console.log(items);
});
function Walid(items){
    console.log(items);
};
// food.forEach(Walid()); // i can't execute it in here
food.forEach(Walid); 
const female_actress = ["Ana De Armas", "Nicola Portman", "Kughsi", "Rio", "Sylvia"];
female_actress.forEach((items, index,arr) => {
    // console.log(items, index,arr);
}); // very powerfull
const companies = [
    {
    langauageName : "JS",
    File_name : "array__loop.js"
},
    {
    langauageName : "PY",
    File_name : "array__loop.js"
},
    {
    langauageName : "RB",
    File_name : "array__loop.js"
},
    {
    langauageName : "PJa",
    File_name : "array__loop.js"
}
];
// companies.forEach((items,index,arr) => {
//     if(index === 1){
//         console.log(arr[index]["langauageName"]);
//     }
// });
companies.forEach((items) => {
    console.log(items.langauageName);
});