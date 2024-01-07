/*                  this keyword refers to the current execution context              */


// this in global space
// console.log(this);
// In a browser, this will refer to the global object (window)



// this inside a function
// (1) global context
function globalFunction() {
  console.log(this);
};
// globalFunction();
// In a browser, this will refer to the global object (window)

// (2) object method
// If a function is a method of an object, this refers to the object on which the method is called.
let user = {
  nameM : 'walid',
  method : function(){
    console.log(`${this.nameM} is here`);
  },
};
// user.method();
// this in 'strict mode' - ( this substitution )

// (3) event handler
// When a function is used as an event handler, this often refers to the element that triggered the event.
document.getElementById('myButton').addEventListener('click', function() {
  // console.log(this); // In this case, this refers to the button element
  //<button id="myButton">click here</button> (ans)
});

// (4)Constructor Function:
//Inside a constructor function (used with new), this refers to the instance being created.
function myClass() {
  this.myProperty = 'Hello';
  // console.log(this); // In this case, this refers to the instance of MyClass
  //here (this.myProperty = 'Hello') this referes to that object by .myProperty i am making a new thing in that object
};

var myInstance = new myClass();



// call, apply, bind methods ( sharing methods )




// this inside arrow function
// arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context).
const arrowFunction = () => {
  console.log(this);
};
// arrowFunction();  // In a browser, this refers to the global object (window)
// when arrowFunction is called, it inherits the this value from the surrounding scope, and it doesn't have its own this binding
/*

It's important to note that this behavior can be advantageous in certain situations, especially when working with functions inside other functions or methods. Arrow functions can help avoid issues related to dynamic scoping of this in regular functions

*/




// this inside nested arrow function
function outerFunction() {
  console.log("Outer this:", this); // 'this' is determined by how outerFunction is called
  const innerArrowFunction = () => {
    console.log("Inner this:", this); // 'this' is inherited from the lexical scope of outerFunction
  };

  innerArrowFunction();
}
const myObject = {
  property: "Hello",
  outerMethod: outerFunction,
};
// myObject.outerMethod(); // 'this' inside outerFunction is myObject, and 'this' inside innerArrowFunction is also myObject
/*
In this example, outerFunction is a regular function, and it defines an arrow function innerArrowFunction within it. The this value inside innerArrowFunction is inherited from the lexical scope of outerFunction, so it will be the same as the this value in outerFunction.
When outerFunction is invoked as a method of myObject using myObject.outerMethod(), the this value inside both outerFunction and innerArrowFunction will be myObject. This is due to the lexical scoping behavior of arrow functions.
*/


'use strict';
// strict mode
//In strict mode, it can be any value
//In non–strict mode, this is always a reference to an object.
//In JavaScript, using the string literal 'this' in strict mode doesn't have any special significance or effect. Strict mode in JavaScript is a way to catch common coding errors and prevent the usage of certain error-prone features. When strict mode is enabled, you can't use undeclared variables, assign values to read-only properties, or use the with statement, among other restrictions.