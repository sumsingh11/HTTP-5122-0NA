//######## LAB 2-3 EMAIL SIGNUP ########
alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
//==== LOGIC =============

// 1. Create a popup box that asks the user if they would like to join your mailing list.
var joinMailingList = confirm("Would you like to join our mailing list?");

if (joinMailingList === true) {
// 2. If the user agrees to sign up for the mailing list, provide a popup textbox to ask for that information.
    var email = prompt("Please enter your email address:", "me@example.com");

// 3. Validate the input against no input, the default text, or a Cancel click.
if (email === null || email === "" || email === "me@example.com") {
    // If the input is invalid
        alert("Thank you, but your email was not valid.");
    } else {
    // If the input is valid
        alert("Thank you, our next newsletter will be sent to " + email);
    }
} else {
    // If the user declines to join
    alert("Thank you, we will not bother you again.");
}

