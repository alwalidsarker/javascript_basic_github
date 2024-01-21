/*

with the help of rest parameter we can pass many arguments in a fucntion's scope
rest paarmeter works on both normal function and arrow function


*/
function arguments(){
  for(let i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  };
  //in here "arguments" is an object but it is not a array ( so we cann't treat it as an array)
  //also it doesn't have any methods
};
// arguments('walid');
// but it won't work in arrow function
let arguments2=()=>{
  for(let i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  };
};
// arguments2('walid')
// let array = Array.prototype.slice.call(arguments);
//rest parameter
function restMain(...array){
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  };
};
// restMain('walidsarker','bangladesh','srilanka','maldives');
function restNew(name,age,...other){
  console.log(name);
  console.log(age);
  other.map(function(main){
    console.log(`other : ${main}`);
  });
};
// restNew('walid',20,'sijan','musfik','najmus','mahamudul','abrar');