// 'spread operator' is very smart in ES5
var numbers = [1,2,3,4];
function calculation(a,b,c,d){
  console.log(`sum : ${a+b+c+d}`);
};
// /without spread
calculation.apply(null,numbers);
//with spread
calculation(...numbers)
var names = ['himel','sijan','musfik','najmus','mahamudul','walid'];
var newNames = ['bangla',...names,'amenabaki'];
console.log(newNames);