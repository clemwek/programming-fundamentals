// implement your solution here
function superSum(a) {
    var total = 0;
    for (var i in a) {
        var strA = a[i].toString();
        for (var b in strA) {
            total += Number(strA[b]);
        }
    }
    return total;
}