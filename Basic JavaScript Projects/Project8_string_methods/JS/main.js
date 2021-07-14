function con_function() { //This function is going to combine all of our parts to make 1 sentence using concate
    var p1 = "Everybody was ";
    var p2 = "kungfoo ";
    var p3 = "fighting!";
    var whole = p1.concat(p2, p3);
    document.getElementById("Test1").innerHTML = whole;
}

function slice_Function() { //This function is going to "slice" our sentence to a specified point
    var Sentence = "Dog, Cat, Fish, Donkey";
    var cut = Sentence.slice (10,14);
    document.getElementById("Slice").innerHTML = cut;
}

var Upper = "Hello there!"; 
var Uppercase = Upper.toUpperCase(); //This capitalizes our above sentence
document.write(Uppercase);

var A = "Sally sells seashells by the sea shore.";
var B = A.search("seashells"); //This searches our sentence to find the word "seashells"
document.write (B);

function numbers_Function() { //This function changes our number to a string value
    var C = 2429;
    document.getElementById("num_to_str").innerHTML = C.toString();
}

function precision_Function() { //This function returns a precise number specified by input
    var D = 38125.524309876437869337;
    document.getElementById("Precision").innerHTML = D.toPrecision(13);
}

function to_Fixed() { //This function returns a rounded version of the input
    var num = 9.173623;
    var numF = num.toFixed(2);
    document.getElementById("to_fixed").innerHTML = numF;
}

function value_of_function() { //This function will return the value of the variable specified
    var X = "This is a string.";
    var Y = X.valueOf();
    document.getElementById("value_of").innerHTML = Y;
}