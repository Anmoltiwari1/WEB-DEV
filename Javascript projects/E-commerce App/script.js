document.addEventListener('DOMContentLoaded',()=>{

    let p1= document.getElementById("100");
    let p2=document.getElementById("200");
    let p3=document.getElementById("300");
    let p4=document.getElementById("400");
    let products = document.getElementById("list");
    let amt = document.getElementById("Amount");
    let checkout = document.getElementById("Checkout");


    let amount=0;
    let count=0;

    function updateCheckoutVisibility() {
        if (amount > 0) {
          checkout.style.display = "block";
          del.forEach((btn) => (btn.style.display = "block"));
        } else {
          checkout.style.display = "none";
          del.forEach((btn) => (btn.style.display = "none"));
        }
        
    }

    p1.addEventListener('click',()=>{
        amount+=100;
        count++;
        const li1=document.createElement('li');
        console.log(li1);
        li1.textContent=`${count}. Product-1 -->Rs 100`;
        products.appendChild(li1);
        amt.textContent=`Total Amount payable is : ${amount}`;
        updateCheckoutVisibility();
    })
    p2.addEventListener('click',()=>{
        amount += 200;
        count++;
        const li1=document.createElement('li');
        const li2=document.createElement('li');
        console.log(li1);
        li1.textContent = `${count}. Product-2 -->Rs 200`;
        products.appendChild(li1);
        amt.textContent = `Total Amount payable is : ${amount}`;
        updateCheckoutVisibility();
    })
    p3.addEventListener('click',()=>{
        amount += 300;
        count++;
        const li1=document.createElement('li');
        const li2=document.createElement('li');
        console.log(li1);
        li1.textContent = `${count}. Product-3 -->Rs 300`;
        products.appendChild(li1);
        amt.textContent = `Total Amount payable is : ${amount}`;
        updateCheckoutVisibility();
    })
    p4.addEventListener('click',()=>{
        amount += 400;
        count++;
        const li1=document.createElement('li');
        const li2=document.createElement('li');
        console.log(li1);
        li1.textContent = `${count}. Product-4 -->Rs 400`;
        products.appendChild(li1);
        amt.textContent = `Total Amount payable is : ${amount}`;
        updateCheckoutVisibility();
    })
        checkout.addEventListener('click',()=>{
            alert("You have checked out");
        })
})