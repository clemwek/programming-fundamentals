function grade(a) {
    // implement your solution here
    if (80 <= a && a <= 100) {
        return 'A';
    } else if (60 <= a && a < 80) {
        return 'B';
    } else if (50 <= a && a < 60) {
        return 'C';
    } else if (40 <= a && a < 50) {
        return 'D';
    } else if (30 <= a && a < 40) {
        return 'E';
    } else if (0 <= a && a < 30) {
        return 'F';
    } else {
        return 'Not allowed!';
    }
}