/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Learner Constructor:", function() {
    var l;

    beforeEach(function() {
        l = new Learner('Banie S.', 'banie', ['Java:8', 'JavaScript:7', 'PHP:5']);
        console.log('check');
    });

    it("should have username property", function() {
        expect(l.username).toEqual('banie');
    });

    it("should have name property", function() {
        expect(l.name).toEqual('Banie S.');
    });

    it("should have skills property", function() {
        expect(l.skills.Java).toEqual(8);
        expect(l.skills.JavaScript).toEqual(7);
        expect(l.skills.PHP).toEqual(5);
    });

    it("should have bestSkill() method", function() {
        expect(l.bestSkill()).toEqual('Java');
    });
});

describe("Functions:", function() {

    var learners = [];

    beforeEach(function() {
        learnersRaw.forEach(function(l) {
            learner = new Learner(l[0], l[1], l[2]);
            learners.push(learner);
        });
    });

    it("bestSkills(): should return list of .bestSkills()", function() {
        var list = bestSkills(learners);
        expect(list[0][0]).toEqual('anthony');
        expect(list[0][1]).toEqual('Java');

        expect(list[2][0]).toEqual('stellak');
        expect(list[2][1]).toEqual('JavaScript');
    });

    it("highestRated(): return highest rated learner", function() {
        var highest = highestRated(learners, 'JavaScript');
        expect(highest.username).toEqual('clem0');
        expect(highest.rating).toEqual(8);
    });

    it("search(): should return a list of objects", function() {
        var phpLearners = search(learners, 'PHP');
        expect(phpLearners[2].username).toEqual('stellak');
        expect(phpLearners[3].username).toEqual('felix');
    });
});