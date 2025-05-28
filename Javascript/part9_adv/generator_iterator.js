//Genrator Function -->It is defined by "function*",it mainly not exectue all at a once,for every output we have to run it each time

function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}

let gen=numberGenerator();
let genTwo=numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//give seprate output for this
console.log(genTwo.next().value);
console.log(genTwo.next().value);

