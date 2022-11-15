/**
 * @jest-environment jsdom
 */

const { game } = require("../game");
// the below code will be the same for every html file that you want to load into DOM

const { execPath } = require("process");

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
});