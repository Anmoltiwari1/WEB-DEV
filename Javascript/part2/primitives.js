//Number

let balance=120;
let anotherbalance=new Number(120);//not recommended
console.log(anotherbalance);
console.log(anotherbalance.valueOf());
console.log(typeof(balance));//number-->primitives
console.log(typeof(anotherbalance));//object-->non-primitives


//boolean

let isActive=true;
let isReallyActive=new Boolean(true);//not recommended
console.log(isActive);//number-->primitives
console.log(isReallyActive);//object-->non-primitives


//null and undefined

let firstname;
let secondname=null;
console.log(firstname);//undefined
console.log(secondname);//null


//String

let myString="hello";
let myString1="Hola";
let username="Hitesh";

let oldGreet=myString+ " "+'hitesh';
console.log(oldGreet);

let greetMessage=`Hello ${username} !`;

let demoOne=`Value is ${2*2}`;

console.log(demoOne);
console.log(greetMessage);


//Symbol-->Only garrenty is uniqness

let sm1=Symbol("Anmol");
let sm2=Symbol("Anmol");
console.log(sm1==sm2);//false
console.log(sm1);//Symbol()//Anmol



