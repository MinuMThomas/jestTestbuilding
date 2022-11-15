/**
 * @jest-environment jsdom
 */


const { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn } = require("../game");
// the below code will be the same for every html file that you want to load into DOM

                const { execPath } = require("process");

// because we can actually use Jest to  check if an alert has been called.
//To do this, we use something called a spy

jest.spyOn(window, "alert").mockImplementation(() => { });

//only have to chane the file name 
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8")
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contents correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });

    test("choices contain correct ids", () => {
        // use equal matcher
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4" ]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    // test("should clear the computer sequence array", () => {
    //     expect(game.currentGame.length).toBe(0);
    // });
    test("should be one move in the computer's game array" , () => {
        expect(game.currentGame.length).toBe(1);
    })
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("should display zero with element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
                //test data listener attribute has been set to true on each circle
test("expect dta listener to be true", () =>{
    const elements = document.getElementsByClassName("circle");
    for (let element of elements) {
        expect(element.getAttribute("data-listener")).toEqual("true");
        }
    });

});

describe ("game play works correctly", () =>{
    beforeEach (() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn ();
    });
    //after each test
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = []; 

    });
    test ("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2)
    });
    test ("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
    test("sshow turns should update game.turnNumber", () => {
        game.turnNumber = 42;
        showTurns();
        expect(game.turnNumber).toBe(0)
    });

    test("should increment the score if the turn is correct", () => {
        game.playerMoves.push(game.currentGame[0]);
        playerTurn();
        expect(game.score).toBe(1);
    });
    test("should call an alert if the move is wrong", () => {
        game.playerMoves.push("wrong");
        playerTurn();
        // new method 'toBeCalledWith'
        expect(window.alert).toBeCalledWith("wrong move!");
    });
});

