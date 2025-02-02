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
