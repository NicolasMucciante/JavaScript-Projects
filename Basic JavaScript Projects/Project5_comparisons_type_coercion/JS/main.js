document.write(typeof 1); // Gives data types 
document.write("20" + 8); //This combines 2 different types of data

function my_Function() {  // This trys to divide 0 by itself to return a NaN
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function2() { //This function is telling us if the data type entered is a number or not
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
}

function my_Function3() { 
    document.getElementById("Test3").innerHTML = isNaN('274');
}

function my_Function4() { //This function is displaying Infinity
    document.getElementById("Test4").innerHTML = 2E310;
}

function my_Function5() { //This is displaying negative infinity
    document.getElementById("Test5").innerHTML = -2E310;
}

document.write("<br>"); //This creates a line break in JS
document.write(5>3); // This tests if 5 is greater than 3
document.write("<br>");
document.write(7<4);
console.log(5+3); //This writes the answer of the math equation in the console
console.log(7>7.1)
document.write("<br>");
document.write(5==5); //This tests if the two values are equal
document.write("<br>");
document.write(10==2);
document.write("<br>");

document.write("Ballon" === "Ballon"); //This is testing if the two values are the same data type and if they are equal
document.write("<br>");
document.write(25 === "Kangaroo");
document.write("<br>");
document.write("3" === 3);
document.write("<br>");
document.write(36 === 71);
document.write("<br>");
document.write(5<9 && 3>2); //This is performing an AND statement to see if both are true
document.write("<br>");
document.write(5>3 && 8>10);
document.write("<br>");
document.write(10<5 || 8>3); //This is performing an OR statement 
document.write("<br>");
document.write(7<4 || 1>10);

function not_Function() { //This function is performing a NOT statement
    document.getElementById("Test6").innerHTML = ! (5>9);
}

function not_Function2() {
    document.getElementById("Test7").innerHTML = ! (6<7);
}