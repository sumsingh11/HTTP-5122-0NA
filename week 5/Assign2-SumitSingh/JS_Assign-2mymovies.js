
// Declare and initialize 7 variables having 7 movie names.
var movieNo1 = "5 centimeters per second";
var movieNo2 = "A silent Voice";
var movieNo3 = "I want to eat your pancreas";
var movieNo4 = "Akira";
var movieNo5 = "Paprika";
var movieNo6 = "Blue";
var movieNo7 = "Colorful: A beautiful life";

// Creating an array to hold variables and represent my top 7 anime movie list.
var moviesArray = [movieNo1, movieNo2, movieNo3, movieNo4, movieNo5, movieNo6, movieNo7];

// Stretch Goal: Using a loop to agin ask the user if their input data is not valid.
var userInput=true;
while (userInput == true) 
    {

//User is asked, "Which top 7 movie would you like?" with default text "Pick a number: 1 - 7".and convert it to an integer.
var askMovie = parseInt(prompt("Which top 7 movie would you like?", "Pick a number: 1 - 7"));

// Validating the user input.
if (askMovie >= 1 && askMovie <= 7) 
    {

// A pop-up will appear that will say, "Number num on the list is " with num being the movie’s position on the top 7, followed by the movie name.
alert("Number " + askMovie + " on the list is " + moviesArray[askMovie - 1]);   

//Output messages to the console with a loop that will show all of the movie names with their numbers.
    for (var i = 0; i < moviesArray.length; ++i) 
        {
            var num = i + 1;
            console.log("Movie No. " + num + ": " + moviesArray[i] + ".");
        }
        userInput=false;
    } else {

    // Users entering invalid text will see a pop-up message that will say "Please enter a number between 1 and 7!"
        alert("Please enter a number between 1 and 7!");
    }
}