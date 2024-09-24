

var userName = prompt("Insert you name :");
var rollNo = +prompt("Insert you Roll No :");
var english = +prompt("Insert you English Marks :");
var urdu = +prompt("Insert you Urdu Marks :");
var physics = +prompt("Insert you Physics Marks :");
var chemistry = +prompt("Insert you chemistry Marks :");
var mathematics = +prompt("Insert you Mathematics Marks :");


var total = english + urdu + physics + chemistry + mathematics;
var percentage = (total / 500) * 100;

var total;
if (total > 500) {
    total = "Invalid"
}


var percentage;
if (percentage > 100) {
    percentage = "Please fill correct numbers";
}

// if (english <= 100 && urdu <= 100 && physics <= 100 && chemistry <= 100 && mathematics <= 100) {
//     else (

//     )
// }


var grade;
if (percentage >= 90 && percentage <= 100) {
    grade = 'A+';
}

else if (percentage >= 80 && percentage < 90) {
    grade = 'A';
}

else if (percentage >= 70 && percentage < 80) {
    grade = 'B+';
}

else if (percentage >= 60 && percentage < 70) {
    grade = 'B';
}

else if (percentage >= 50 && percentage < 60) {
    grade = 'c';
}
else if (percentage < 50) {
    grade = 'Fail';
}
// else if (percentage>100){
//     alert("Please insert valid value")
// }

else {
    grade = ("please type correct marks");
}



alert("Your Name : " + userName + " \nTotal Marks : " + total + " \nPercentage : " + percentage + " \nGrade : " + grade);