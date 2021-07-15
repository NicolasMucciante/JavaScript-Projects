function Call_Loop() { //This function will count from 0 to 10 using a while loop
    var digit = "";
    var X = 0;
    while (X < 10) {
        digit += X;
    X++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

var A = ("supercalifragilisticexpialidocious");
var B = A.length; //This is going to tell us what the length of the above word is
document.getElementById("super").innerHTML = B;

var Fruits = ["Lime", "Lemon", "Apple", "Banana", "Kiwi", "Watermelon"]; 
var Content = "";
var Y;
function for_Loop() { //This function is going to list off our array above using a for loop
    for (Y = 0; Y < Fruits.length; Y++) {
        Content += Fruits[Y] + "<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML = Content;
}

function array_Function() { //This function is going to display one item of our array by us inputing which item to display
    var Vegetables = [];
    Vegetables[0] = "Celery";
    Vegetables[1] = "Broccoli";
    Vegetables[2] = "Carrot";
    Vegetables[3] = "Letus";
    document.getElementById("Array").innerHTML = Vegetables[0] + ".";
}

const Vehicle = {make:"Dodge", model:"Charger", year:"2015"};

function constant_function() { //This function is going to display the value "model" from the array above
    document.getElementById("Constant").innerHTML = Vehicle.model;
}
Vehicle.year = "2016";
Vehicle.color = "Black"; //This adds the value "color" to the array "Vehicle"

document.getElementById("Constant2").innerHTML = "The vehicle is a " + Vehicle.color + " " + Vehicle.make + " " + Vehicle.model + " made in the year " + Vehicle.year;

let Z = "20";
document.getElementById("Let1").innerHTML = Z;

function return_Function(a, b) { //This is demonstrating a return method
    return a + b;
}
document.getElementById("return").innerHTML = return_Function(4, 5);

let Student = { //This is creating an object "Student" with properties
    name: "John Doe ",
    age: "17 ",
    grade: "12 ",
    gpa: "3.60 ",
    description : function() {
        return this.name + " is " + this.age + " years old, and is in " + this.grade + "th grade, and has a GPA of " + this.gpa;
    }
}
document.getElementById("human").innerHTML = Student.description();

var X = 0; //This is demonstrating the break method to stop the loop when it reaches 3
while (X<5) {
    if (X === 3) {
        break;
    }
    X++;
}
document.getElementById("break").innerHTML = X

var text = ""; //This is demonstrating the continue method to skip over "3" in the loop
for (let V = 0; V < 7; V++) {
    if (V === 3) {
        continue;
    }
    text += V;
}
document.getElementById("continue").innerHTML = text;