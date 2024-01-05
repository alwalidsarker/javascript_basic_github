//main part of interview
const mail = "walid@gmail.com";
if(mail){
    console.log("got it");
}; //ans is (got it)
const false_one = "";
if(false_one){
    console.log("got it");
}else{
    console.log("i dont get it");
}; //ans is (i dont getl it)

// falsy values
// false,0,-0,BigInt 0n, "", null, undefined, NaN
// truly values
// "0","false"," ",[],{},function(){},
if ([].length === 0) {
    console.log("Array is empty");
};//to check an array weather it is empty or not
const obj = {};
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
};//to check an array weather it is empty or not


//nullish coalescing operator : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
console.log(val1);
//ans will be 5


//ternary operator

var walid = 10;
walid <= 60 ? console.log("walid") : console.log("oh damn i am false"); 