// implement your solution here
function objectValues(a) {
    var outArray = [];
    Object.keys(a).sort().forEach(function(key) {
        outArray.push(a[key]);
    });
    return outArray;
}