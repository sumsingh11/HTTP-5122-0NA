// Defining the animeSeries object with 4 properties and 1 function.


const animeSeries = 
{
 title: "Bleach",
 episodes: 366,
 genre: "Action, Supernatural",
 rating: 7.8,

// Method for updating the rating and showing a popup with the new rating.

    updateRating: function(newRating)
 {
        this.rating = newRating;
        alert("Rating updated to: " + this.rating);
 }
     };

// Outputing the animeSeries object to the console.
  console.log("Original animeSeries object:", animeSeries);


// Prompting the user to update the genre property.
 animeSeries.genre = prompt("Enter the new genre for the animeSeries:", animeSeries.genre);

// Prompting the user to update the episodes properties.
 animeSeries.episodes = prompt("Enter the new episodes for the animeSeries:", animeSeries.episodes);

// Call the method to update the rating properties.
  animeSeries.updateRating(9);

// Outputing the updated animeSeries object to the console. 
    console.log("Modified Rating object:",animeSeries);

