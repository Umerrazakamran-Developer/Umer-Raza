let Name = ("Umer Raza");
let Age = ("12");


alert("Welcome to the website, " + Name + "! You are " + Age + " years old.");

console.log("--- Task 1: Greeting User ---");
console.log("Name:" + "Umer Raza");
console.log("Age:" + "12");

function checkGrade(marks) {

    if (marks >= 80) {
        console.log("Marks: " + marks + " -> A Grade");
    } else {
        if (marks >= 70) {
            console.log("Marks: " + marks + " -> B Grade");
        } else {
            if (marks >= 60) {
                console.log("Marks: " + marks + " -> C Grade");
            } else {
                if (marks >= 50) {
                    console.log("Marks: " + marks + " -> Pass");
                } else {
                    console.log("Marks: " + marks + " -> Fail");
                }
            }
        }
    }
}

console.log("--- Task 2: Student Grade ---");

checkGrade(85);
checkGrade(72);
checkGrade(64);
checkGrade(55);
checkGrade(45);
console.log("\n");

console.log("--- Task 3: Even Numbers (1 to 50) ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("\n");

console.log("--- Task 4: Reverse Counting (10 to 1) ---");
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}
console.log("\n");

console.log("--- Task 5: Array Operations ---");
let studentsArray = ["Ali", "Ahmed", "Sara", "Zain"];

studentsArray.push("Fatima");
studentsArray.shift();
studentsArray.unshift("Usman");
studentsArray.pop();

console.log("Final Array:", studentsArray);
console.log("\n");

console.log("--- Task 6: Slice and Splice ---");
let originalNumbers = [10, 20, 30, 40, 50, 60];

let slicedArray = originalNumbers.slice(1, 4); 

originalNumbers.splice(2, 2); 

console.log("Sliced Array (20, 30, 40):", slicedArray);
console.log("Original Array after Splice:", originalNumbers);
console.log("\n");

console.log("--- Task 7: Student Object ---");

let studentObj = {
    name: "Kamran",
    age: 21,
    city: "Karachi",
    course: "Web Development"
};

console.log("Student Name: " + studentObj.name);
console.log("Student City: " + studentObj.city);
console.log("\n");

console.log("--- Task 8: Array of Objects ---");
let studentsData = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 92 },
    { name: "Ahmed", marks: 65 },
    { name: "Zain", marks: 50 }
];

let studentNames = studentsData.map(function(student) {
    return student.name;
});
console.log("Student Names Array:", studentNames);

console.log("Score Details:");
studentsData.forEach(function(student) {
    console.log(student.name + " scored " + student.marks + " marks.");
});
console.log("\n");


console.log("--- Bonus Challenge: Find Topper ---");
function findTopper(students) {
    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].marks > topper.marks) {
            topper = students[i];
        }
    }
    
    console.log("Topper: " + topper.name);
    console.log("Marks: " + topper.marks);
}

findTopper(studentsData);