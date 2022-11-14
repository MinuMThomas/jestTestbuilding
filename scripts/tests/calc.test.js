const addition = require("../calc");

describe ("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22",() => {
            except(addition(20, 22)).toBe(42);
        })
    });
    describe("Substraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})
