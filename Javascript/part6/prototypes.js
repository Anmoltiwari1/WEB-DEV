let computer={
    cpu:12,
    ram:100,
};
let lenovo={
    screen:"HD",
    //Levovo can access computer prototype also
    __proto__:computer
};
let tomHardware={

};

//how to access any prototype
console.log(`computer`,computer.__proto__);
console.log(`Lenvovo`,lenovo.__proto__);



//Another way of prototype..
let genericCar={tyres:4}

let tesla={
    drivers:"AI"
}
//You set prototype of tesla to generic cars,means you have inherited the property of generic car inside the tesla.
Object.setPrototypeOf(tesla,genericCar);

console.log(`tesla`,tesla);
console.log(`tesla`,tesla.tyres);
console.log(`tesla`,Object.getPrototypeOf(tesla));
