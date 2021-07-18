let activePlayer = 'X';
let selectedSquares = [];

function placeXorO(squareNumber) { //This function is for placing X's and O's
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') { //If the active player is X then it will place the X png
            select.style.backgroundImage = 'url("images/x.png")';
        } else { //If the active player isnt X then the O will place
            select.style.backgroundImage = 'url("images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer ==='X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('./media/place.mp3'); //This will play the place sound
        if(activePlayer === 'O'){ //When the computer is placing this disables player input
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000) 
        }
        return true;
    }
    function computersTurn() { //This function will let the computer pick a random square
        let success = false;
        let pickASquare;
        while(!success){
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXorO(pickASquare)){
                placeXorO(pickASquare);
                success = true;
            };
        }
    }
}

function checkWinConditions() { //This is going to search for win conditions
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >=9) { //This is checking for a tie
        audio('./media/tie.mp3'); //This playes the tie audio
        setTimeout(function () { resetGame(); }, 1000)
    }
    function arrayIncludes(squareA, squareB, squareC) { //This is checking for win conditions
        const a = selectedSquares.includes(squareA) //These 3 lines check for 3 in a row
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) { return true } 
    }
}

function disableClick() { //This is the function that disables clicks for 1 second
    body.style.pointerEvents= 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //This will draw the win lines over the canvas
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1, //These are where the start of a lines x and y axis are
    y1 = coordY1, 
    x2 = coordX2, //These are where the end of the axis is
    y2 = coordY2,
    x = x1, //These  store temp x and y axis data we update in our animation loop
    y = y1;


    function animateLineDrawing() { //This function interacts with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) { //This checks if we've reached the endpoint
            if(x < x2) { x +=10; } //These next 2 lines add 10 to the end point
            if(y < y2) { y += 10; }
            if(x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); } //This ends the animation if we reach the end points
        }
        if (x1 <= x2 && y1 >= y2) { //This is for the 6 4 2 win condition
            if (x < x2) { x += 10; }
            if (y > y2) { y -=10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() { //This function clears the board after a win
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick(); //This disables clicking while the win animation is playing
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() { //This resets the game after a win or a tie
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}
