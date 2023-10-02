  
  const Martin = [76, 64, 81, 57, 94];
  const Thomas = [85, 49, 81, 72, 55];
  const Klaus = [65, 91, 84, 67, 85];
  const Maria = [93, 70, 81, 64, 84];
  const David = [81, 99, 71, 100, 69];


function calculateAverageGrade(studentGrades) {
    // Calculates the sum if all grades with reduce....
    const sum = studentGrades.reduce((acc, grade) => acc + grade, 0);
    // Calculate the average by dividing the sum by the number of grades
    const average = sum / studentGrades.length;
    
    if (average < 60) return `${average} F`;
    if (average < 70) return `${average} D`;
    if (average < 80) return `${average} C`;
    if (average < 90) return `${average} B`;
    return `${average} A`;

  }
  console.log("Martin's Average Grade: " + calculateAverageGrade(Martin));
  console.log("Thomas's Average Grade: " + calculateAverageGrade(Thomas));
  console.log("Klaus's Average Grade: " + calculateAverageGrade(Klaus));
  console.log("Maria's Average Grade: " + calculateAverageGrade(Maria));
  console.log("David's Average Grade: " + calculateAverageGrade(David));




function calculateClassAvarage(studentGrades) {
    const sum = studentGrades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / studentGrades.length;
    return average
  }

function avg(){
    let classAverage = (calculateClassAvarage(Martin) + calculateClassAvarage(Thomas) + calculateClassAvarage(Klaus) + calculateClassAvarage(Maria) + calculateClassAvarage(David)) / 5;
    if (classAverage < 60) return `${classAverage} F`;
    if (classAverage < 70) return `${classAverage} D`;
    if (classAverage < 80) return `${classAverage} C`;
    if (classAverage < 90) return `${classAverage} B`;
    return `${classAverage} A`;

}

console.log("The Class Average is: " + avg());







for ( let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i + " Fizz");
    } else if (i % 5 === 0) {
      console.log(i + " Buzz");
    } else {
      console.log(i);
    }
  }


let row = ""
  for (let i = 1; i <= 6; i++) {
   row += "*"
    console.log(row);
  }
  
