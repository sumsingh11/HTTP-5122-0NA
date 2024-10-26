//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
function average(a, b, c, d, e) 
{
    var sum = a + b + c + d + e;
    var average = sum / 5;
    return average.toFixed(1);   
}
// TESTING FUNCTION
console.log(average(5, 10, 15, 20, 25)); 

var HTTP5121 = 61;
var HTTP5126 = 64;
var HTTP5122 = 68;
var HTTP5125 = 58;
var IXD5106 = 72;

var programAverage = average(HTTP5121, HTTP5122, IXD5106, HTTP5125, HTTP5125);


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

if (programAverage >= 70) 
{
    alert("Success! Your average is " + programAverage + ".");
}
else 
{
    alert("Review required. Your average is " + programAverage + ".");
}