/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/
let score;
function calculateGrade(score){
    switch(true){
        case (score >=90 && score<=100):
            return "A grade";
        case (score >=80 && score<90 ) :
            return "B grade";
        case (score>=70 && score <80):
            return "C grade";
        case (score>=60 && score<70):
            return " D grade";
        case (score >=50 && score<60):
            return " E Grade";
        case (score >=40 && score<50) :  
            return "PASS";  
        default:
            return "FAIL";
    }
}
console.log(calculateGrade(100));
console.log(calculateGrade(90));
console.log(calculateGrade(89));
console.log(calculateGrade(75));
console.log(calculateGrade(68));
console.log(calculateGrade(51));
console.log(calculateGrade(45));
console.log(calculateGrade(35));