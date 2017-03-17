// implement your solution here
function oldAndYoung(students) {
    var oldest = 3000;
    var youngest = 0;
    var temp;
    var outObj = {oldest: '', youngest: ''};
    students.forEach(function(obj) {
        temp = obj.yearOfBirth;
        if (temp < oldest) {
            oldest = obj.yearOfBirth;
            outObj.oldest = obj.name;
        }
        if (temp > youngest) {
            youngest = obj.yearOfBirth;
            outObj.youngest = obj.name;
        }
    });
    return outObj;   
}