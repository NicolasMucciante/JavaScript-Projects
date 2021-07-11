function addition_function() { //This creates an adding function 
    var addition = 5 + 5; //The 2 variables are 5 and 5
document.getElementById("MathA").innerHTML = "5 + 5 = " + addition; //Changes the p element in HTML to display the function
}

function subtraction_function() { //Creates a subtration function
    var sub = 17 - 4;
document.getElementById("MathS").innerHTML = "17 - 4 = " + sub;
}

function multi_function() { //Creates a multiplication function
    var multiply = 6 * 8;
    document.getElementById("MathM").innerHTML = "6 * 8 = " +multiply;
}

function division_function() { //Creates a division function
    var divide = 100 / 7;
    document.getElementById("MathD").innerHTML = "100 / 7 = " + divide;
}

function more_math() { //Creates a multiple step math function
    var simple_math = (3+3) * 5 / 8 -2;
    document.getElementById("Math2").innerHTML = "3 + 3, multiplied by 5, divided by 8 and subtracted by 2 = " + simple_math;
}

function modulus_operator() { //Creates a function that demonstrates modulus operator
    var modulus = 37 % 3;
    document.getElementById("mod").innerHTML = "When you divide 37 by 3 you have a remainder of: " + modulus;
}

function negation_operator() { //Creates a function that shows the opposite of the input
    var x = 7;
    document.getElementById("negation").innerHTML = "The opposite of 7 is " + -x;
}

function increment() { //Creates a function that increases the input
var A = 10
A++; //Increments the above value
document.getElementById("inc").innerHTML = "The increment of 10 is: " + A
}


function decrement() { //Creates a function that decreases the input
var B = 3;
B--; //decrements the above value
document.getElementById("decre").innerHTML = "The decrement of 3 is: " + B
}



var C = 2.578429; //Rounds to the nearest integer
document.write(C + " Rounded to the nearest integer = " + Math.round(C));

function random_number() { //This function creates and displays a random number 
    var ran = (Math.random() * 5) //Creates a random number between 0 and 5
    document.getElementById("random").innerHTML = "Your random number is: " + ran
}