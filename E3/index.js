// Arrays for Names and Grades

const students = ["Jhon", "James" ,"Janeese", "Jannus", "Johan","Bruno"]
const mathGrades = [70, 85, 50 ,100 ,20,0]

// loop trough array of Names and compare if parameter === to NAme in array

function nameGrade(name) {
  let studentIdx = students.findIndex((studentName)=>{
    return name === studentName
  })
  if(mathGrades[studentIdx] < 60){
    document.getElementById("box").style.background = "red";
    document.getElementById("smiley").innerHTML = "&#128530; "
  } else if (mathGrades[studentIdx] < 80){
    document.getElementById("box").style.background = "yellow";
    document.getElementById("smiley").innerHTML = "&#128529; "
  }else if (mathGrades[studentIdx] <= 100){
    document.getElementById("box").style.background = "green";
    document.getElementById("smiley").innerHTML = "&#128525; "
  }else{
    document.getElementById("box").style.background = " RGB(225, 225, 225)";
    document.getElementById("smiley").innerHTML = "&#128580;"
    document.getElementById("box").classList.add("animate__animated", "animate__headShake")

    
 }
    
  

  if (studentIdx !== -1) {
    // Check if the student was found in the array
    return [`Hello ${name} :) you got ${mathGrades[studentIdx]} points.`];
  } else {
    return [`Hello ${name} :) you are not a student.`];
  }


  
}


// getting the Input from the input field
const inputField = document.getElementById("input");

// Add an event listener for the "keyup" event
inputField.addEventListener("keyup", function(event) {
  // Check if the "Enter"  was pressed
  if (event.key === "Enter") {
    const inputValue = inputField.value;  
    document.getElementById("studentGrade")
    studentGrade.innerHTML = (nameGrade(inputValue))
  }
});



