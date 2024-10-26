//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = 
{
    fullName: "Sumit Singh",
    age: 32,
    status: "student",
    location: "Humber College, North campus in Toronto, Ontario, Canada.",

    getInfo: function() 
    {
        alert("Hi! My name is " + this.fullName + ". I am " + this.age + " years old" + " and I am a " + this.status + ", currently studying at " + this.location);
    }
}
console.log(meObject.name);
meObject.getInfo();