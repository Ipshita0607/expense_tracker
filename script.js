const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");

let totalAmount = 0;

addBtn.addEventListener("click", addExpense);

function addExpense() {

    const expenseName = nameInput.value;
    const expenseAmount = Number(amountInput.value);

    if (expenseName === "" || expenseAmount <= 0) {
        alert("Please enter valid details");
        return;
    }

    totalAmount += expenseAmount;
    total.textContent = totalAmount;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${expenseName}</span>
        <span>₹${expenseAmount}</span>
        <button class="delete">Delete</button>
    `;

    expenseList.appendChild(li);

    nameInput.value = "";
    amountInput.value = "";

    li.querySelector(".delete").addEventListener("click", function () {

        totalAmount -= expenseAmount;
        total.textContent = totalAmount;

        li.remove();

    });

}