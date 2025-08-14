function checkStudentStatus() {
    const student = {
        name: "John Locke",
        marks: 75,
    };

    if (student.marks >= 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }

    console.log(`Student Name: ${student.name}`);
    console.log(`Marks: ${student.marks}`);
}

function printEvenNumbers() {
    for (let i = 1; i <= 100; i++) {
        i % 2 == 0 ? console.log(i) : null;
    }
}

function details() {
    const student = {
        name: "John Locke",
        age: 20,
        grade: "8th",
        subjects: ["Math", "Science", "History", "English", "Art"],
    };

    for (const key in student) {

        if (key === "subjects") {
            console.log("Subs:")
            for (let s in student[key]) {
                console.log(student[key][s]);
            }
        } else {
            console.log(`${key}: ${student[key]}`);
        }
    }

}

const Greeting = (name) => {
    console.log(`Hello, ${name}!`);
}


const evenOrOddChecker = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
}


const squareCalculator = (num) => {
    return num * num;
}



const maxOfTwoNumbers = (a, b) => {
    return a > b ? a : b;
}

//call all functions
checkStudentStatus();
console.log("-------------")
printEvenNumbers();
console.log("-------------")
details();
console.log("-------------")
Greeting("John");
console.log("-------------")
evenOrOddChecker(5);
console.log("-------------")
console.log('Square root of 4 is: ', squareCalculator(4));
console.log("-------------")
console.log(`Max of 10 and 20 is: ${maxOfTwoNumbers(10, 20)}`);
console.log("-------------")