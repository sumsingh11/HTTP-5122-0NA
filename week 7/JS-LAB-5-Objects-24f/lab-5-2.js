//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
var bankCustomer = 
{
    lastName: "Singh",
    branchNumber: "010",
    accountBalance: 500.25,
    interestRate: 1.03,

//3. Add your first method and test it. Remember, the methods will change the properties of the object.
    makeDeposit: function(amount) 
    {
    this.accountBalance += amount;
    console.log("Your balance is $" + this.accountBalance.toFixed(2) + ".");
    },

//4. Add your second method and test it.
    makeWithdrawal: function(amount) 
    {
        this.accountBalance -= amount;
        console.log("Your balance is $" + this.accountBalance.toFixed(2) + ".");
    },

    addInterest: function() 
    {
        var effectiveRate = this.interestRate;
        if (this.multipleAccounts) 
        {
            effectiveRate += 0.005; // Increase interest rate temporarily
        }
        this.accountBalance *= effectiveRate; // Updated balance
        console.log("Thank you, your current balance is now $" + this.accountBalance.toFixed(2) + ".");
    }
}

//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!
console.log ("Starting balance: $" + bankCustomer.accountBalance.toFixed(2) + ".");
// Deposit Amt $200
    bankCustomer.makeDeposit(200);
// Withdraw AMmt $75
    bankCustomer.makeWithdrawal(75);
// New output balance to the console.
    bankCustomer.addInterest();