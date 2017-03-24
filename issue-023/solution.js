// implement your solution here
function Person(name, age) {
    this.walked = 0;
    this.name = name;
    this.age = age;
    this.greet = function(a) { return 'hello '+a.name}
    this.walk = function(d) { this.walked += d }
}