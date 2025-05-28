const person={
    name:"Hitesh",
    greet(){
        console.log(`My name is ${this.name}`);
    }
}

person.greet();//My name is Hitesh

const greetFunction=person.greet
greetFunction()//My name is undefined-->context is minssing

const boundgreet=person.greet.bind({name:"John"});
boundgreet();//My name is John


const boundgreet1=person.greet.call({name:"John"});
boundgreet();//My name is John