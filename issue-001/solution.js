function dataTypeCheck(a) {
    // implement your solution here
    if  (Number(a) === a && a % 1 === 0) {
        return a / 2;
    } else if (Number(a) === a && a.toString().indexOf('.') != -1) {
        return a * 2;
    } else if ((typeof a) === "string" && Number(a) == a) {
        return Number(a);
    } else if ((typeof a) === "string" && Number(a) != a) {
        return "hello " + a
    } else if ((typeof a) === "undefined") {
        return 0
    } else {
        return 0
    }
}