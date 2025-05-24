//Check if a number is greater than another number

let num1=5;
let num2=2;
console.log("I am a upper code");


if(num1<num2) {
    console.log(`${num1} is smaller`);
}else{
    console.log(`${num2} is smaller`);
    
}

console.log("I am a Lower code");


//Check is String is equal to another String

let s1="Anmol";
let s2="Tiwari";

if(s1==s2){
    console.log("Pick another username");
}else{
    console.log("You can take this username");
}

//Check if a variable is number or not

let score=8;
if(typeof(score)==='number'){
    console.log("It is a number");   
}else{
    console.log("Not a number");
}

//Check is a varibale is object
let score1=["1","Hello"];
if(typeof(score1)==='object'){
    console.log("It is a number");   
}else{
    console.log("Not a number");
}

//Check if a boolean value is true or false
let isTeaReady=true;
if(isTeaReady){
    console.log("Yes");
}else{
    console.log("No");
}

//Check if array is empty or not

let items=["Item1"];
if (items.length>0) {
    console.log("No");
}else{
    console.log("Yes");
    
}