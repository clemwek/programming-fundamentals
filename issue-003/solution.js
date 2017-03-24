function product(a, b) {
    // implement your solution here
    try {
        if (typeof a === "number" && typeof b == "number") {
            return a * b;
        } else {
            throw new Error ("NaN");
        }
    } catch (error) {
        return error;
    }
}