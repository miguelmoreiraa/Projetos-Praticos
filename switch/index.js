

// function calculate(numberOne, operator, numberTwo) {
//     let result = 0;

//     switch (operator) {
//         case "+":
//             result = numberOne + numberTwo
//             break
//         case "-":
//             result = numberOne - numberTwo
//             break
//         case "*":
//             result = numberOne * numberTwo
//             break
//         case "/":
//             result = numberOne / numberTwo
//             break
//         default:
//             console.log("Invalid operator")
//             break
//     }
//     return result
// }

// console.log(calculate(10, "%", 1));


function getSchoolGrades(score) {
    let schoolGradesNinety = score >= 90;
    let schoolGradesBetweenEightyAndEightyNine = score >= 80;
    let schoolGradesBetweenSeventyAndSeventyNine = score >= 70;
    let schoolGradesBetweenSixtyAndSixtyNine = score >= 60;
    let schoolGradesFinally;

    if (schoolGradesNinety) {
        schoolGradesFinally = "A"
    } else if (schoolGradesBetweenEightyAndEightyNine) {
        schoolGradesFinally = "B"
    } else if (schoolGradesBetweenSeventyAndSeventyNine) {
        schoolGradesFinally = "C"
    } else if (schoolGradesBetweenSixtyAndSixtyNine) {
        schoolGradesFinally = "D"
    } else {
        schoolGradesFinally = "F"
    }
    return schoolGradesFinally
}

console.log(getSchoolGrades(90))
console.log(getSchoolGrades(80))
console.log(getSchoolGrades(70))
console.log(getSchoolGrades(60))
console.log(getSchoolGrades(50))





