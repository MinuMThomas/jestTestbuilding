// js str
// game {object
// score - integer 
// currentGAme - array 
// playerMoves- array 
// choices -array }
// newGame()
// addTurn()
// showTurns()
// lightsOn()
// plyerTurn ()
// showScore()

let game = {
    score : 0 
}

module.exports = { game };
/** why the curly braces? Well this is because we'll be exporting more than  
one object and function from this file,  so we need to put them in curly braces. 
We'll do exactly the same now as we  import this into our game.test.js file,  
 */