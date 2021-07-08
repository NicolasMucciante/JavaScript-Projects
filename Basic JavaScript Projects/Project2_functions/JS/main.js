function test () { //Creates a function to say "Happy Birthday" when a button is pressed
    var birthday = "Happy Birthday!!"; //Asigns a string to a variable
    var result = birthday.fontcolor("green"); //Makes the result green text color
    document.getElementById("Sing").innerHTML = result;
}

function talk() { //Creates a function using += operator
    var sentence = "This is part 1"; //Asigns a string to a variable 
    sentence += " this is part 2";
    document.getElementById("concatenate").innerHTML = sentence;
}