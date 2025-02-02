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
