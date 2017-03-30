/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Try Catch:", function() {
    it("throws an exception for non-numbers", function() {
        expect(product).toThrowError(Error, 'NaN Exception');
    });

    it("returns multiple of numbers", function() {
        expect(product(10, 5)).toEqual(50);
        expect(product(0, 5)).toEqual(0);
        expect(product(11, 3)).toEqual(33);
    });
});