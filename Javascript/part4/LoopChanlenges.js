/*1. Write a 'while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum.*/
let i=1;
let sum=0;
while (i<=5) {
    sum+=i;
    i++;
}
console.log(sum);





/*2. Write a 'while loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown". */

let j=5;
let k=0;
let countdown=[];
while(j>=1){
    countdown.push(j);
    j--;
}
console.log(countdown);



/*3. Write a 'do while loop that prompts a user to enter their favorite tea type until they enter ""stop". 11 Store each tea type in an array named 'teaCollection'.*/


// let teaCollection=[];
// let tea;
// do {
//     tea=prompt(`Enter Your Favourite tea (stop) to finish`);//Not wok in console it will work in console in browser inspect

//     if(tea!="stop"){
//         teaCollection.push(tea);
//     }
// } while (tea!="stop");

/*4. Write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named 'total.*/

let a=1;
let s=0;
do {
    s+=a;
    a++;
} while (a<=3);
console.log(s);


/*5. Write a 'for loop that multiplies each element in the array [2, 4, 6] by 2 and stores the results in a new array named 'multipliedNumbers`.*/

let arr=[2,4,6];
let multipliedNumbers=[];
for(let z=0;z<arr.length;z++){
    multipliedNumbers[z]=arr[z]*2;
}
console.log(multipliedNumbers);


/*6. Write a for loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named 'cityList`.*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList=[];
for(let c=0;c<cities.length;c++){
    let element=cities[c];
    cityList.push(element);
}
console.log(cityList);



