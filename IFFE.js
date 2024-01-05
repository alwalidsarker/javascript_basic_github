(function chai(){
    // this is a named IFFE (because of chai)
    console.log(`db connented`); 
})();
// () first one is defination and () second is called execution
// also iffe is used to remove the gloal pllution
(() => {
    //it is not a name iffe
    console.log("walid is here");
})();
//if you use iffe in arraw function it will give you error if you did not use semi colon
// aslo in upper one you will be getting error not using semi colon
//if you dont use it you will be getting back to back error