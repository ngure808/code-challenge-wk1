// promts the user to input a value
const mph = prompt("Enter speed value")
// calls the function speedDetector with the input as the argument
speedDetector(mph)


function speedDetector(speed){
    let response = ""

    // checks if the value is less than 70 to return a respnse 
    if (speed < 70){
        response = "Ok"

    // takes the value of speed greater than 70 and calculates the demerit points
    } else if (speed >= 70 && speed <= 130){
        let demerits = 0
        let aboveLimit = 5
        let difference = speed - 70

        demerits = Math.floor(difference / aboveLimit)
        response = `${demerits} points` 
        
     // if the demerits exceed 12 license is suspended
    } else if (speed >= 135){
        demerits = 0
        aboveLimit = 5
        difference = speed -70

        demerits = Math.floor(difference / aboveLimit)
        response = `License suspended ${demerits} points`
    }

    // links the function to the html
    return document.getElementById("gambit").innerText = response;
}  