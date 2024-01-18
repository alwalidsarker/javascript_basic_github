// arrow function is often called fat arrow function
var arrowFunction = () => console.log('walidsarker');
// arrowFunction(1)
/* auto return in arrow function */
let dateOfBirth = [ 2007 , 2008 ];
let ages = dateOfBirth.map(function(dateOfBirth){
  return 2024 - dateOfBirth;
}); //simple one (with simple function)
// console.log(ages);
let age = dateOfBirth.map((array)=> 2024 - array);
// console.log(age);

/* arrow function behaviour (mainly in "this" keyword) */
// const lex5 = {
//   aFunc : function(){
//     console.log(this);
//     return function(){
//       console.log(this);
//     };
//   }
// };
// console.log(lex5.aFunc()());
const lex5 = {
  aFunc : ()=>{
    console.log(this);
    return ()=>{console.log(this);}
  }
};
// console.log(lex5.aFunc()());
// ans is {window} object 2times
//because arrow function inherits "this" value form it's surrounding scope not it's own scope
//and here this refers to global scope not it's own scope

(()=>{console.log('walid');})();