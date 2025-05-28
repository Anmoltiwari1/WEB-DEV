//example 1
//If we use function other than arrow function then then it will give button in console but when arroow function is used it will give the window
document.getElementById('firstb').
addEventListener('click',()=> {
    let para=document.getElementById("firstp");
    para.textContent="The paragraph is changed"
})

//exmaple 2

document.getElementById("secondb").addEventListener("click",()=> {
  let citiesList = document.getElementById("firstul");
  citiesList.firstElementChild.classList.add("highlight")
});
    
//exmaple 3

document.getElementById("ChangeOrder").addEventListener("click",()=>{
    let order = document.getElementById("coffeeType")
    order.textContent = "Eespresso";
    order.style.color="red"
})

//example 4
document.getElementById("fourthb").addEventListener("click",()=>{
   let newItem=document.createElement('li');
   newItem.textContent="Eggs";//This is now node not a html element
    document.getElementById("secondul").appendChild(newItem);//appendchild accepts node not html element
})




//example 5

document.getElementById("fivthb").addEventListener("click",()=>{
    let task = document.getElementById("thirdul");
    task.lastElementChild.remove();
})

//example 6

document.getElementById("sixthb").addEventListener("dblclick",()=>{
    alert("Chaicode");
});

//example 7
//Not working again
document.getElementById("teaList").addEventListener("click", function (event) {
  console.log(event.target);
});

//exmaple 8
document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback = document.getElementById("feebbackInput").value;//value will show what we have input in form
    console.log(feedback);
    document.getElementById("feebbackDisplay").textContent=`Your Feedback is :${feedback}`;
    document.getElementById("feebbackDisplay").style.backgroundColor="red";
});

//exmaple 9

document.addEventListener('DOMContentLoaded',function () {
    document.getElementById("domStatus").textContent="DOM loaded Successfully!";
})

//example 10
document.getElementById("high").addEventListener('click',function() {
    let p = document.getElementById("decriptionText");
    p.classList.toggle("highlight");
});


//when we do these in some random website we might get HTML collections insted of one line or tag--> so HTML collection is nothing but an array-->so we can access it as an array array[0],array[1]..etc