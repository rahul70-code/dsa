class Student {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
        this.scores = [];
    };
    // instance methods
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}!`;
    };

    markLate() {
        this.tardies += 1;
        if(this.tardies > 3) {
            return `YOU ARE EXPELLED!`
        }
        return `${this.firstName} ${this.lastName} is late ${this.tardies} times`;
    };
    addscore(score) {
        this.scores.push(score);
        return this.scores;
    };
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){ return a+b;});
        return sum/this.scores.length;
    };

    // class methods
    static enrollingStudents(...students) {

    }
};

let firstStudent = new Student("Rahul","Talreja",1);
let secondStudent = new Student("Soham","Railkar", 2);
let thirdStudent = new Student('yogesh','patil',3)
// firstStudent.grade = 3;

// console.log(firstStudent.grade)
// console.log(firstStudent)
// console.log(secondStudent)
// console.log(firstStudent.fullName())
// console.log(firstStudent.addscore(25))
// console.log(firstStudent.addscore(30))
// console.log(firstStudent.addscore(45))
// console.log(firstStudent.calculateAverage())
// console.log(firstStudent.markLate())
// console.log(firstStudent.markLate())
// console.log(firstStudent.markLate())
// console.log(firstStudent)
// console.log(firstStudent.markLate())
// console.log(secondStudent.fullName())
