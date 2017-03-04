/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Data Type Check:", function() {
    it("checks for integers", function() {
        expect(dataTypeCheck(10)).toEqual(5);
        expect(dataTypeCheck(25)).toEqual(12.5);
    });

    it("checks for floats", function() {
        // expect(dataTypeCheck(21.0)).toEqual(42);
        expect(dataTypeCheck(1.5)).toEqual(3.0);
    });

    it("checks for 'castable' strings", function() {
        expect(dataTypeCheck("21")).toEqual(21);
        expect(dataTypeCheck("43.4")).toEqual(43.4);
    });

    it("checks for any other strings", function() {
        expect(dataTypeCheck("hello")).toEqual("hello hello");
        expect(dataTypeCheck("James")).toEqual("hello James");
    });

    it("checks for NaN", function() {
        expect(dataTypeCheck(NaN)).toEqual(0);
        expect(dataTypeCheck(5 / "a")).toEqual(0);
    });

    it("checks for null", function() {
        expect(dataTypeCheck(null)).toEqual(0);
    });

    it("checks for undefined", function() {
        expect(dataTypeCheck(undefined)).toEqual(0);
    });
});