let info_walid = ['walid sarker', 'biriyani and chocolate', 12];
// let name = info_walid[0];
// let fav_food = info_walid[1];
// let age = info_walid[2];
// upper one is rellay not good ( takes too much typing )
//insted we can do this one : 
let [name,favFood,age]= info_walid;
// console.log(name); // code works
// also works in obj
let walidUser = {
  nameZ : 'walid sarker',
  hobby : 'coding',
  agen : 12,
};
let {nameZ,hobby,agen} = walidUser; // must use the real one like: (nameZ = nameZ) not other
// console.log(agen); //must use the real name