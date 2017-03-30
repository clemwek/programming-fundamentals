// here is the raw learners list that you are supposed to 
// process appropriately
var learnersRaw = [
    ['Anthony N.', 'anthony', ['Java:8', 'JavaScript:7', 'PHP:5']],
    ['Briana S.', 'sbriana', ['Java:3', 'JavaScript:8', 'PHP:7']],
    ['Stella K.', 'stellak', ['JavaScript:7', 'PHP:5', 'C++:4']],
    ['Clement W.', 'clem0', ['JavaScript:8', 'Java:7', 'Go:3']],
    ['Branda C.', 'bc', ['JavaScript:7', 'Java:9', 'Python:7', 'C++:4']],
    ['Felix R.', 'felix', ['Java:3', 'PHP:8', 'Go:5']],
];

// your code starts here, onwards

var learners = [];

function Learner(name, username, skills) {
    // your code here
    this.name = name;
    this.username = username;
    this.skills = {};
    for (i = 0; i < skills.length; i++) {
        a = skills[i].split(':')
        this.skills[a[0]] = Number(a[1]);
    }

    this.bestSkill = function () {
        let maxLang = ['', 0];
        for (let prop in this.skills) {
            if (this.skills[prop] > maxLang[1]) {
                maxLang[0] = prop;
                maxLang[1] = this.skills[prop];
            }
        }
        return maxLang[0];
    };

    this.bestRating = function () {
        let maxLang = ['', 0];
        for (let prop in this.skills) {
            if (this.skills[prop] > maxLang[1]) {
                maxLang[0] = prop;
                maxLang[1] = this.skills[prop];
            }
        }
        return maxLang;
    };

    this.skillList = function() {
        let skills = [];
        for (let prop in this.skills) {
            skills.push(prop);
        }
        return skills;
    }
}

function bestSkills(learners) {
    // your code here
    let outArray = [];
    for (let props in learners) {
        outArray.push([learners[props].username, learners[props].bestSkill()])
    }
    return outArray;
}

function highestRated(learners, skillName) {
    // your code here
    let outObj = {};
    let rating = 0;
    for (let props in learners) {
        if (learners[props].bestRating()[0] == skillName) {
            if (learners[props].bestRating()[1] > rating) {
                outObj.username = learners[props].username;
                outObj.rating = learners[props].bestRating()[1];
            }
        }
    }
    return outObj;
}

function search(learners, skillName) {
    // your code here
    let outArray = [];
    for (let prop  in learners) {
        if (learners[prop].skillList().indexOf(skillName) != -1) {
            outArray.push({username: learners[prop].username});
        }
    }
    return outArray;
}