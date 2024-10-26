//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var Cart = [];
var total = 0;
var threshold = 35;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total < threshold) {
	//GET ITEM COST FROM USER

	//CONVERT USER INPUT TO A NUMBER
    var itemPrice = parseInt(prompt("Enter the price of the item:"));
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
    total += itemPrice;
	//PUSH ITEM COST TO CART ARRAY
    Cart.push(itemPrice);
}
	
//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will now be free!");

//SEND OUTPUT TO CONSOLE
var message = "Total Item prices: ";
for (var i = 0; i < Cart.length; i++) {
    message += Cart[i];
    if (i < Cart.length - 1) {
        message += " | ";
    }
}
console.log(message);
