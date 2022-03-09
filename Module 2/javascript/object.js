//empty object
let obj={};
console.log(obj);

let objAman={
    Name: "Aman",
    Age:45,
    phoneno:8868503744,
    lastname: "aman"
};
console.log(objAman);

let capAmerica={
    Name:"Steve",
    Age:9999,
    Friends:['Natasha','Thor','Tony','Bruce'],
    Address:{
        city:'Queens',
        State:'Haryana'

    },
    isAvenger: false,
    sayHi:function(){
        console.log("cap America says Hi");
    }
};
console.log(capAmerica);
console.log(capAmerica.Name);
console.log(capAmerica.Address);
console.log(capAmerica.Friends[1]);
console.log(capAmerica.Address.city);
console.log(capAmerica.sayHi());
console.log(capAmerica.sayHi);
capAmerica.sayHi();


//add a new key to object
capAmerica.movies=['Avengers', 'civilwar','endgame'];
console.log(capAmerica);

//delete a key

delete capAmerica.movies;

console.log(capAmerica);


//change a key value pair
capAmerica.isAvenger=true;
capAmerica.Address.State='New York';

console.log(capAmerica);


//secand method to access key
console.log(capAmerica.Name);
console.log(capAmerica['Name']);
console.log(capAmerica['Address']['city']);
