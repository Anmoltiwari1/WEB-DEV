let car={
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        return  `${this.make} car  got started in ${this.year}`;
    },
};
console.log(car.start());

//Constructor
function Person(name,age){
    this.name=name
    this.age=age
}

let John=new Person("John",23);
console.log(John.name);

function Animal(type){
    this.type=type
}
//Thsi all is Prototype chain
//To add a property in constructor Animal
Animal.prototype.speak=function(){
    return `${this.type} make a sound`
}

const dog=new Animal("Dog")
console.log(dog.speak());


Array.prototype.hitesh=function(){
    return `Custom method ${this}`
}

let myArray=[1,2,3];
console.log(myArray.hitesh());
let myNewArray=[1,2,3,4,5,6];
console.log(myNewArray.hitesh());


//Class

class Vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

const car1=new Vehicle("Tata","Nano");
console.log(car1.start());

//Inheritance-->Take properties from the parent class
class Car extends Vehicle{
    driver(){
        return `${this.make}:This is an inheritance exmaple`;
    }
}

let myCar=new Car("Tata","Punch")
console.log(myCar.start());
console.log(myCar.driver());

let vehOne=new Vehicle("Tata","Harrier")
console.log(vehOne.start());
console.log(vehOne.make);



//Encapsulation-->Wrapping up the data so it cannot be accessed by everyone

class BankAccount {
    //# this variable cannot be accessed by anyone
    #balance=0;

    deposit(amount){
        //I can access this inside a class but not any other class
        this.#balance+=amount;
        return this.#balance
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account=new BankAccount()
//balance cannot be accessed outside the class
console.log(account.balance);
account.deposit(1000);
console.log(account.getBalance());





//Abstraction-->Hiding up the details

class CoffeMachine{
    start(){
        //Call DB
        //filter value
        return `Starting the machine...`
    }

    brewCoffee(){
        //comlex calculation
        return `Brewing coffee`
    }

    pressStart(){
        let m1=this.start()
        let m2=this.brewCoffee()
        return `${m1} and ${m2}`
    }
}
//We simple push the start and not knowing the internal detail we get hte coffee
let myMachine=new CoffeMachine()
console.log(myMachine.pressStart());


//Polymorphism-->Something can be take multiple form

class Bird{

    fly(){
        return `Flying....`
    }
}

class Penguin extends Bird{

    fly(){
        return `Peguin can't fly`
    }
}

class Sparrow extends Bird{

}
//This will print "Peguin can't fly"
let bird1=new Penguin()
console.log(bird1.fly());
//This will print "Flying...."
let bird2=new Sparrow()
console.log(bird2.fly());





//static method

class Calculator{
    //static can be called only by class nobody else can call it
    static add(a,b){
        return a+b;
    }
}

// let minicalc=new Calculator()
// console.log(minicalc.add(2,3));

//means no oobject needed to call it
console.log(Calculator.add(2,3));



//Getters and Setters

class Employee{
    #salary;
    constructor(name,salary){
        if(salary<0)
            throw new Error("Salary cannot be in negative");
            
        this.name=name
        this.#salary=salary
    }

    //getters
    get salary(){
        return `You are not allowed to see salary`;
    }

    //setters
    set salary(value){
        if (value<0) {
            console.log("Invalid Salary");
        }else{
            this._salary=value;
        }
    }
}
//gives error "Salary cannot be in negative"
let emp=new Employee("Alice",-50000)
console.log(emp._salary);
emp.salary=-60000
















