let obj={};
console.log(obj);//{}
console.log(typeof(obj));//object
let username={
    firstname:"Anmol" ,
    isLoggedin:true,
};
//if object is const means it cannot be changes but inside it values can be changed
const username1={
    "first name":"Hitesh",
    firstname:"Anmol" ,
    isLoggedin:true,
};
//it can be changed either  as it is inside object it is const
username1.firstname="Mr. A"
//we can add it from outside also
username1.lastname="Tiwari";
console.log(username1.firstname);
console.log(username1["first name"]);
console.log(username1.lastname);
console.log(username1);
console.log(typeof username);




//Date
let today=new Date();
console.log(today);
console.log(today.getDate());





//Array
let heros=["a","b","c",true,23];
let anotherUser=["hitesh",true];
console.log(anotherUser[0]);




//Typeconversion

//implicit conversion
console.log(1+"1");//11
console.log("1"+1);//11
let isVlaue=true;
console.log(isVlaue+1);//2

//explicit
let isVlaue1=true;
console.log(Number(isVlaue1));//1
let is="2abc"
console.log(Number(is));//NaN










