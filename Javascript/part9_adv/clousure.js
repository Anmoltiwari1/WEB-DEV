//clouser-->These are functions,they remember the enviroment in which they are created

function outer(){
    let counter=4;
    return function(){
        counter++;
        return counter;
    };
}

let inc = outer();
//It remebers the update value of it that is mainly clousure
console.log(inc());
console.log(inc());
console.log(inc());
