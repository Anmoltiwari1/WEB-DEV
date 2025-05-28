//Constructor Function
function Person(name,age){
    this.name=name
    this.age=age
}

function Car(make,model){
    this.make=make
    this.model=model
}


//Object/instamce of constructor
//new is important keyword.
let mycar=new Car("Totyota","Camry")
console.log(mycar);
let mynewcar=new Car("Audi","R8")
console.log(mynewcar);
let p=new Person("Anmol","22");
console.log(p);


function Tea(type){
    this.type=type
    this.describe=function(){
        return `this is a cup of ${this.type}`
    }
}

let lemontea=new Tea("Lemon tea")
console.log(lemontea.describe());

function Animal(species){
    this.species=species
}

//Animal me sound function add kia prototype ke madad se
Animal.prototype.sound=function(){
    return `${this.species} makes sound`; 
}
let dog=new Animal("dog");
console.log(dog.sound());

let cat=new Animal("cat");
console.log(cat.sound());


//To check that if someone using new kwyword or not and thorung error

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
        
    }
    this.name=name;
}
let tea=new Drink("tea");
//This will throw error.
let coffee= Drink("coffee");


