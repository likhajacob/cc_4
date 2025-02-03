// Task 1 - If statements
//Declare amount of purchase
let purchaseAmount = 220;
//Declare final amount after discount
let finalAmount = purchaseAmount;
//Aply 10% discount
if(purchaseAmount > 200) {
    finalAmount = purchaseAmount * 0.9;
}
console.log('Final amount after discount: $${finalAmount}');

// Task - 2 For Loop
// Array of sales
let sales = [103, 125, 110, 115, 124]
let totalsales=0;
//loop to calculate total sales
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`);

// Tsk 3 - while loop
let stock = 10; // Initialize stock with 10

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; // Decrease stock by 1
}

console.log("Stock is depleted.");

// Task 4 - while loop 
console.log("Stock is depleted.");

let responses = 0; // Initialize responses with 0
do {
    console.log(`Responses collected: ${responses}`);
    responses++; // Simulate user input
} while (responses < 3);

// Task 5 - For... In loop
let employee = { name: "Alice", position: "Manager", salary: 75000 };
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// Task 6 - For...of loop

let products = ["Laptop", "Mouse", "Keyboard"];
for (let product of products) {
    console.log(`Product: ${product}`);
}
// Task 7 - For Each()Method
let orders = [101, 102, 103];
orders.forEach(order => {
    console.log(`Processing Order ID: ${order}`);
});

// Task 8 - Function Declaration
function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100)
}

let tax = calculateTax(100, 25);
console.log('Tax: $${tax}'); 

// Task 9 - Function Expressions
const applyDiscount = function(price, discountPercentage){
    return price - (price * (discountPercentage / 100));
}
let discountedPrice = applyDiscount (100, 10)
console.log('Discounted Price: $$ {discountedPrice}');

// Task 10 - Arrow functions
const calculatePoints = (purchaseAmount) =>{
    return (purchaseAmount / 10);
};
let points = calculatePoints(200);
console.log('Loyalaty points earned: ${points}');