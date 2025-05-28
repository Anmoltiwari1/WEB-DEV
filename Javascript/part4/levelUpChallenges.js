/*Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds `"chai"`.Store all teas before "chai" in a new array named `selectedTeas`.*/
 
let selectedTeas=[];
let arr1=["green tea", "black tea", "chai", "oolong tea"];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]!="chai"){
        selectedTeas[i]=arr1[i];
    }
    else{
        break;
    }
}
console.log(selectedTeas);

/*
2. Write a `for loop that loops through the array ["London", "New York", "Paris", "Berlin"]` and skips "Paris".Store the other cities in a new array named `visitedCities`.*/
let arr2=["London", "New York", "Paris", "Berlin"];
let count=0;
let visitedCities=[];
for(let j=0;j<arr2.length;j++){
    if(arr2[j]=="Paris"){
        continue;
    }
    else{
        visitedCities[count++]=arr2[j];
    }
}
console.log(visitedCities);



/*3. Use a 'for-of loop to iterate through the array [1, 2, 3, 4, 5]` and stop when the number `4` is found.Store the numbers before `4` in an array named smallNumbers`.*/

let numbers=[1,2,3,4,5];
let smallNumbers=[];
for (const num of numbers) {
    if(num==4){
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

/*5. Use a 'for-in' loop to loop through an object containing city populations.Stop the loop when the population of "Berlin" is found and store all previous cities' populations in a new object named 'cityPopulations`.

let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
}; */
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000};
//Empty objects
let citiesNewPopulations={};

for (const key in citiesPopulation) {
    if(key=="Berlin"){
        break;
    }
    console.log(citiesPopulation[key]);
    citiesNewPopulations[key]=citiesPopulation[key]
}
console.log(citiesNewPopulations);

/*6. Use a 'for-in loop to loop through an object containing city populations.Skip any city with a population below 3 million and store the rest in a new object named 'largeCities`.
let worldCities = {
"Sydney":5000000,
"Tokyo":9000000,
"Berlin":3500000,
"Paris":2200000}*/

let worldCities = {
    "Sydney":5000000,
    "Tokyo":9000000,
    "Berlin":3500000,
    "Paris":2200000};

let largeCities={};
for (const key in worldCities) {
    if(worldCities[key]>3000000){
        largeCities[key]=worldCities[key];
    }
}
console.log(largeCities);

/*Write a `forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]`.Stop the loop when "chai" is found, and store all previous tea types in an array named `availableTeas`.*/

let arr = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas=[];
let y=0;

//We cannot use break in foreach --> beacuse it is function
//use function in forEach
arr.forEach(function(tea){
    if(tea=="chai"){
        return;
    }
    else{
        availableTeas.push(tea);
    }
});
console.log(availableTeas);

/*
Write a 'forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"]`.Skip "Sydney" and store the other cities in a new array named 'traveledCities'.
*/

let myWorldCities=["Berlin", "Tokyo", "Sydney", "Paris"];

let t=[];

myWorldCities.forEach(function(temp){
    if (temp=="Sydney") {
        return;
    }
    t.push(temp);
})

console.log(t);



