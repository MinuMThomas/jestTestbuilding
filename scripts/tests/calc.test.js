const addition = require("../calc");

describe ("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22",() => {
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 62 for 40 + 22",() => {
            expect(addition(40, 22)).toBe(62);
        })
    });
    describe("Substraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})
