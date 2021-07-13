var X = 10 //Assigns global var X
function myFunction() {
    document.write(X + 5);
}
myFunction(); //Displays function on screen

function  myFunction2() {
    var Y = 5 //Assigns local variable
    document.write (X + Y);
}
myFunction2();

console.log(X * Y); //This will cause an error since the variable Y is a local variable

function get_Date() { //This function will display our message if the time is less than 8:00 pm
    if (new Date().getHours() < 20) {
        document.getElementById("Greet").innerHTML = "Hello, how are you today?";
    }
}

function if_State() { //This function will only display if the number on the left is larger than the right
    if (7>4)
    document.getElementById("Test").innerHTML = ("7 is larger than 4")
}

function Age_Function() { //This function determins if the user is old enough to nuy fireworks based on their input
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Purchase = "You are old enought to buy fireworks!";
    }
    else {
        Purchase = "You are not old enough to buy fireworks.";
    }
    document.getElementById("user_Age").innerHTML = Purchase;
}

function Time_function() { //This function reads the time on the users computer to tell them what time of day it is
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { //If the time is earlier than noon and after midnight it will display "its morning"
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //If the time is after noon and before 6 pm it will display "its afternoon"
        Reply = "It is afternoon.";
    }
    else { //Anything else it will display "its evening time"
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
