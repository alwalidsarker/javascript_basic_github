// for(let i = 10; i < 20; i++){
//     if(i === 15){
//         console.log("i am 5");
//     }; //this wil execute first (because of flow)
//     console.log(i);
// };

// for(let i =0; i <= 10; i++){
//     console.log(`outer loop ${i}`);
//     for(let j = 0; j <= 10; j++){
//         // console.log(`inner loop ${j} and inner loop ${i}`);
//         console.log(i + "*" + j + "=" + i*j);
//     };
//     //making multiplication table
// };

// let array = ["Thor", "Flash", "Batman"];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// const Super_Heros = ["Superman", "John", "Flash", "Shaktiman", "Batman"];
// for(let i = 0; i < 5; i++){
//     console.log(Super_Heros[i]);
// };

//break and continue

for (let index = 0; index <= 20; index++) {
    if(index ===5 ){
        console.log("I am Five");
        continue; 
    }; // we use continue to run a loop 
    console.log(`Value of index is ${index}`);
};
// for (let index = 0; index <= 20; index++) {
//     if(index ===5 ){
//         console.log("I am Five");
//         break;
//     }; // we use break to stop a loop 
//     console.log(`Value of index is ${index}`);
// };

// for(let main = 0; main <= 10; main++){
//     console.log(`This is Table number ${main}`);
//     for(let table = 0; table <= 10; table++){
//         console.log(`${main}` + "*" + `${table}` + "=" + main*table);
//     };
// };