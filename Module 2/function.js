//function in js without parameter and return 
function sayHello(){
    console.log("Hello to functions");
}
sayHello();

//function with parameter
function sum(num1, num2){
let addition=num1 +num2;
    console.log("Addition of given numbers "+addition)
}

sum(5,6);

function multiply(num1, num2){
    return num1*num2;
}
let ans=multiply(6,7);
console.log(ans);


//storing of function-function are first class citizen
let a= function(num1, num2){
    return num1-num2;
}
console.log(a(10,8));
console.log(a);


//IIFE- Immediately invoked function expression

(function(){
    console.log("hello from iife");
})()

//IIFE with parameter

//(function(num1,num2){
  //  console.log(num1+num2);
//})(10,5);

(function(num1,num2){
    console.log(num1/num2);
})(10,5);