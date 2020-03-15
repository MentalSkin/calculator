//All mathematical operations inside an object -> methods
let mathOperations = {
    sum: function(a,b) {return a+b},
    subtraction: function(a,b) {return a-b},
    multiplication: function(a,b) {return a*b},
    division: function(a,b) {return a/b},
}

//Function that takes 2 numbers and 1 operator and calls the proper method
let operate = function() {}


// ?? Add envent listener for each key
// If it's a number, append it to the current number,
// if it's an operation, store the previous number in a variable, save the type of operation and start the input of a new number
// When '=' is pressed, call the proper method on the variables and display result.
// Store result for further operations.

