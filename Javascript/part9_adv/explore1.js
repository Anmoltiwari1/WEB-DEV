console.log("Chai code");

function sayHello() {
    console.log("Hello");
}

//it will execute after 5 seconds
setTimeout(() => {
    sayHello();
}, 5000);

//This will run before above functions,called asyncornous nature of javascript
console.log("End code");
