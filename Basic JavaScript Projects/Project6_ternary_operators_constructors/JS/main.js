function Ride_Function() { //This function tells you weather or not you are tall enough, based on input, to ride the ride
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + " to ride.";
}

function Vote_Function() { //This function is telling you weather or not you are old enough to vote based on input
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age<18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //This function creates a constructor for vehicles
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //This is creating objects to add to the constructor
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //This is displaying elements from our constructor
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function myFunction2() {
    document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + (" ") + Emily.Vehicle_Make + (" ") + Emily.Vehicle_Model + " made in " + Emily.Vehicle_Year;
}


function Students(Name, Age, Grade, GPA) {
    this.firstName = Name;
    this.age = Age;
    this.grade = Grade;
    this.average = GPA;
}
const Student1 = new Students("John", 13, "7th", "3.5");

document.write(Student1.firstName + " is in " + Student1.grade +" grade and has a " + Student1.average +" GPA.");

function Counting_Function() { //This is  nested function that adds one to our start point and displays it on screen
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
