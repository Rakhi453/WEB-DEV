let str="I am a string";
console.log(str);

//length of string
let len= str.length;
console.log(len);

//sliced method- extract some part of string
//from index (2,8) start from two but do not include 8
let slicedarr= str.slice(2,8);
console.log(slicedarr);

//replace method
//replaces the strng with given string but original string does not changes
let replacedstr= str.replace("am","was")
console.log(replacedstr)
console.log(str);

//to upper
let upperCase=str.toUpperCase()
console.log(upperCase);

//to lower
let lowerCase= str.toLowerCase();
console.log(lowerCase);

//to concatenate
let firstname= "Rakhi";
let lastname= "kumari";
let fullname= firstname.concat(lastname);
console.log(fullname);


//split- split on basis of given parameter
//returns an array

let splitted= str.split(" ")
console.log(splitted);