// groupLogin.js

// Define the required team number
const requiredTeamNumber = 6;

// Define the list of valid team members
const teamMembers = {
    "Rohit": "Rohit Singh",
    "Amit": "Amit Singh",
    "Rakhee": "Rakhee Singh",
    "Sumit": "Sumit Singh"
};

// Function to validate input
/**
 * Checks if the input is valid.
 * @param {string} input - The input to validate.
 * @returns {boolean} - Returns true if the input is valid, otherwise false.
 */
const isValidInput = (input) => input !== null && input.trim() !== "";

// Function to capitalize the first letter of a string
/**
 * Capitalizes the first letter of the input string.
 * @param {string} input - The input string.
 * @returns {string} - The input string with the first letter capitalized.
 */
const capitalizeFirstLetter = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

// Function to prompt for team number until a valid one is entered
/**
 * Prompts the user for their team number until a valid number is entered.
 * @returns {boolean} - Returns true if the correct team number is entered.
 */
const promptForTeamNumber = () => {
    let enteredNumber;
    while (true) {
        enteredNumber = prompt("Which team number do you belong to?");
        if (!isValidInput(enteredNumber) || isNaN(enteredNumber)) {
            // Alert the user if the input is invalid or not a number
            alert("Invalid input! Please enter a valid team number.");
        } else if (parseInt(enteredNumber) === requiredTeamNumber) {
            // Return true if the correct team number is entered
            return true;
        } else {
            // Alert access denied if the team number is not correct
            alert("Access denied! Incorrect team number.");
        }
    }
};

// Function to prompt for first name and validate it
/**
 * Prompts the user for their first name and validates it.
 * @returns {boolean} - Returns true if the name is valid, otherwise false.
 */
const promptForFirstName = () => {
    let firstName;
    while (true) {
        firstName = prompt("Enter your first name");
        if (!isValidInput(firstName)) {
            // Alert the user if the input is invalid
            alert("Invalid input! Please enter a valid name.");
        } else {
            // Normalize the input by capitalizing the first letter
            const normalizedFirstName = capitalizeFirstLetter(firstName);
            if (teamMembers[normalizedFirstName]) {
                // Greet the user by their full name if the name is valid
                alert(`Welcome ${teamMembers[normalizedFirstName]}!`);
                // Show the main content of the page
                document.getElementById('main-content').style.display = 'block';
                // Set the welcome message with the user's full name
                document.getElementById('welcome-message').textContent = `Welcome to the Group Login Page, ${teamMembers[normalizedFirstName]}!`;
                return true;
            } else {
                // Alert access denied if the name is not valid
                alert("Access denied!");
            }
        }
    }
};

// Main logic
/**
 * Main logic to prompt the user for their team number and first name.
 * If the correct team number is entered, the user is prompted for their first name.
 * If the name is valid, the user is greeted by their full name.
 */
if (promptForTeamNumber()) {
    promptForFirstName();
}