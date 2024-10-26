//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
var storedUsername = "darth"; // Correct user name
var storedPassword = "vadar"; // Correct password
var inputUsername; // user name input
var inputPassword; // password input

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
inputUsername = prompt("Please enter your username:");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Entered Username: " + inputUsername);

//5. CREATE POPUP BOX FOR PASSWORD
inputPassword = prompt("Please enter your password:");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Entered Password: " + inputPassword);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (inputUsername === storedUsername && inputPassword === storedPassword)

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
{
	alert("Welcome back " + inputUsername);
	console.log("Login successful");} 

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else {

    alert("Invalid username/password");
    console.log("Login Fail");
}