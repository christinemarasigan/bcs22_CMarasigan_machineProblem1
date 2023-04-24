// ITCS227 Source Code Template for 2T AY 2022- 2023
/* 
      Program: Computation of Grades using Function
      Programmer: Christine T. Marasigan
      Section: BCS22
      Start Date: April 20, 2023
      End Date: April 25, 2023
*/

let students = [];
let grades = [];

for (let i = 0; i < 5; i++) {
  let name = prompt(`Enter name of student ${i+1}: `);
  students.push(name);
  calculateGrade(name);
}

function getEnablingAssessment(name) {
  let cp = 0;
  for (let j = 0; j < 5; j++) {
    let grade = parseInt(prompt(`Enter enabling assessment ${j+1}: `));
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
      cp += grade;
    } else {
      alert("Grade must be a number between 0 and 100. Please try again.");
      j--;
    }
  }
  return cp / 5;
}

function getSummativeAssessment(name) {
  let sa = 0;
  for (let j = 0; j < 3; j++) {
    let grade = parseInt(prompt(`Enter summative assessment ${j+1}: `));
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
      sa += grade;
    } else {
      alert("Grade must be a number between 0 and 100. Please try again.");
      j--;
    }
  }
  return sa / 3;
}

function getFinalExamGrade(name) {
  let grade = parseInt(prompt(`Enter major exam grade: `));
  if (!isNaN(grade) && grade >= 0 && grade <= 100) {
    return grade;
  } else {
    alert("Invalid input. Grade must be a number between 0 and 100.");
    return getFinalExamGrade(name);
  }
}

function calculateLetterGrade(grade) {
  char = ["A","B","C","D","F"]
  if (grade >= 90 && grade <= 100) {
    return char[0];
  } else if (grade >= 80 && grade < 90) {
    return char[1];
  } else if (grade >= 70 && grade < 80) {
    return char[2];
  } else if (grade >= 60 && grade < 70) {
    return char[3];
  } else {
    return char[4];
  }

}

function calculateGrade(name) {
  let cpAvg = Math.round(getEnablingAssessment(name).toFixed(2));
  let saAvg = Math.round(getSummativeAssessment(name).toFixed(2));
  let fe = Math.round(getFinalExamGrade(name).toFixed(2));
  let grade = Math.round(cpAvg * 0.3 + saAvg * 0.3 + fe * 0.4);
  let letterGrade = calculateLetterGrade(grade);

  grades.push({
    'Name of Student' : name,
    'Class Participation' : cpAvg,
    'Summative Assessment' : saAvg,
    'Exam Grade' : fe,
    'Grade Score' : grade,
    'Letter Grade' : letterGrade
  });
}

console.table(grades);