//######## LAB 2-1 FILE DELETE CONFIRMATION ########
alert("hey 2.1");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE.
var userChoice = confirm("Are you sure you would like to delete the file?");

//2. IF USER CLICKS OKAY, POPUP messageOut WITH yes Message.
if (userChoice===true) {
messageOut += yesMessage;}

//3. IF USER CLICKS ANYTHING BUT OKAY, POPUP messageOut WITH noMessage.
else {
messageOut += noMessage;}
alert(messageOut);
