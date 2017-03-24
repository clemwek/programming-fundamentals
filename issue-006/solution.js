// implement your solution here
function selectSum(a) {
    var total = 0;
    for (var i in a) {
        if (typeof a[i] == 'number') {
            total += a[i];
        }
    }
    return total;
}