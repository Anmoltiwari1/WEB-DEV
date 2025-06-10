document.addEventListener('DOMContentLoaded',()=>{

    let Expense=document.getElementById("Expense");
    let Kharcha = document.getElementById("Kharcha");
    let Expenses = document.getElementById("Expenses");
    let Amount1 = document.getElementById("Amount1");
    let Add_Expense_btn=document.getElementById("Add-Expense");
    let Name_of_Expense = document.getElementById("Name_of_Expense");
    let hidden = document.getElementById("hidden");
    let ExpenseList = document.getElementById("ExpenseList");

    let Total_Amount=0;

    Add_Expense_btn.addEventListener('click',(e)=>{
        e.preventDefault();

        const kharch = parseFloat(Kharcha.value);
        const emt = Expense.value.trim();

        if (!emt || isNaN(kharch) || kharch <= 0) {
          alert("Please enter a valid expense and amount.");
          return;
        }

        hidden.style.display = "block";
        Total_Amount += kharch;

        const li = document.createElement("li");
        li.className = "expense-item";
        li.innerHTML = `
        <span>${emt}</span>
        <span>₹${kharch}</span>
        <button class="delete-btn">Delete</button>
    `;

        ExpenseList.appendChild(li);
        Amount1.textContent = `₹${Total_Amount.toFixed(2)}`;

        // Handle Delete
        li.querySelector(".delete-btn").addEventListener("click", () => {
          Total_Amount -= kharch;
          li.remove();
          Amount1.textContent = `₹${Total_Amount.toFixed(2)}`;
          if (Total_Amount <= 0) {
            hidden.style.display = "none";
          }
        });

        // Clear input fields
        Expense.value = "";
        Kharcha.value = "";
    })

})