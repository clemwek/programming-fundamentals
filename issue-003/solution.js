function product(a, b) {
    // implement your solution here
    try {
        if (typeof a == "string" || typeof b == "string") {
            throw "NaN";
        } else {
            a * b;
        }
    } catch (error) {
        return error;
    }
}