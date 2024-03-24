
// the following two lines of code promt the user to input their score 
// const myprompt = require("prompt-sync")({ sigint: true })
// prompt code 
const score = prompt("Enter Your Score: ");

// the input placed after the user has been prompted is passed as the argument of the function
userGrade(score)


// inputs are passed through to a function that returns to the user the grade as the output
// inputs should range between 0 to 100


// this function takes marks as an argument and if a value is passed it will iterate through the if statement to find which condition is fulfilled
// function block
function userGrade(marks){
    let grade = "E"
    if (marks > 0 && marks < 40){ // marks range from 0 to 39
        grade = 'E'
    }else if (marks >= 40 && marks <= 49){ //marks range from 40 to 49
        grade = 'D'
    }else if (marks >= 50 && marks <= 59){ //marks range from 50 to 59 
        grade = 'C'
    }else if (marks >= 60 && marks <= 79){ //marks range from 60 to 79
        grade = 'B'
    }else if (marks >= 80 && marks <= 100){ //marks range from 80 to 100
        grade = 'A'
    }
    
    // link statement
    //links this function to the html file 
    return document.getElementById("response").innerText = grade;
}
