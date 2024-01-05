const number = [1,2,3];
let my_total = number.reduce((a,c) => a + c,0);
// let my_total = number.reduce(function(acc,cc){
//   console.log(`${acc} and ${cc}`);
//   return acc + cc;
// },0);
console.log(my_total);