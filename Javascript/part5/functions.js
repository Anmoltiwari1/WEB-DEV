//Smaple functions in javascript
function greet(name) {
    //console.log("Hello "+name);
    console.log(`Hello ${name}`);
}
greet("Anmol");

/*1. Write a function named 'makeTea that takes one parameter, typeofTea', and returns a string like *"Making green tea" when called with "green tea"".
Store the result in a variable named teaorder.
*/

function makeTea(typeofTea) {
        let teaorder = `Making ${typeofTea}`;
        return teaorder;
}
console.log(makeTea("Lemon tea"));

/*Create a function named 'orderTea that takes one parameter, teaType`. Inside this function, create another function named 'confirmorder that returns a message like "Order, confirmed for chai".Call confirmOrder from within orderTea and return the result.*/

function orderTea(teaType) {
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }
    //we can retunr whole functions in javascript.
    return (confirmOrder());
}

orderTea("chai");

/*Write an arrow function named 'calculateTotal that takes two parameters: 'price' and 'quantity. The function should return the total cost by multiplying the `price` and `quantity'.Store the result in a variable named 'totalCost'.*/

// function greet(){

// }
const totalCost = (price,quantity)=> {
    return price*quantity;
}

console.log(totalCost(499,30));


/*Write a function named 'processTeaOrder that takes another function, `makeTea', as a parameter and calls it with the argument "earl grey".Return the result of calling 'makeTea`*/

function makeTea(typeofTea) {
    return `maketea: ${typeofTea}`;   
}

function processTeaOrder(Teafunction) {  
    return Teafunction(`earl grey`);
}

let order=processTeaOrder(makeTea);
console.log(order);

//Function which take functions as an argument called higher order function

/*Write a function named 'createTeaMaker that returns another function. The returned function should take one parameter, teaType`, and return a message like "Making green tea".Store the returned function in a variable named teaMaker and call it with "green tea".*/

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}


let teaMaker=createTeaMaker();
let result=teaMaker("Chai");
console.log(result);


