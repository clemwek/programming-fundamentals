// implement your solution here
function sumEven(a) {
    return a.reduce(
        function (total, num) {
            if (num % 2 === 0) {
                total += num;
            }
            return total;
        }
    );
}