// js str
// game {object
// score - integer 
// currentGAme - array 
// playerMoves- array 
// choices -array }
// newGame()
//(reset the score to zero, clear the playerMoves array, clear the currentGame array)
// addTurn()
// showTurns()
// lightsOn()
// plyerTurn ()
// showScore()

let game = {
    score : 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}


module.exports = { game, newGame, showScore };
/** why the curly braces? Well this is because we'll be exporting more than  
one object and function from this file,  so we need to put them in curly braces. 
We'll do exactly the same now as we  import this into our game.test.js file,  
 */