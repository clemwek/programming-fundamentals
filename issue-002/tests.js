/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Strict Check:", function() {
    it("checks for same type", function() {
        expect(strictCheck(false, false)).toEqual(1);
        expect(strictCheck(30, 30)).toEqual(1);
    });

    it("checks for loosely equal", function() {
        expect(strictCheck(10, "10")).toEqual(true);
        expect(strictCheck("", 0)).toEqual(true);
        expect(strictCheck([], 0)).toEqual(true);
    });

    it("checks for not equal", function() {
        expect(strictCheck(10, "10.5")).toEqual(false);
        expect(strictCheck({}, 0)).toEqual(0);
    });
});