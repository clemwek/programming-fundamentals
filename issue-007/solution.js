// implement your solution here
function superSum(a) {
    var total = 0;
    for (var i in a) {
        var strA = a[i].toString(); 
        var b = a[i].toString.length;
        while (b--) {
            total += Number(strA[b]);
        }
        
    }
    return total;
}