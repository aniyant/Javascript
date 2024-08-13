function calculate(num1, num2) {
    // Define the operation callback function
    function operation(num1, num2, callback) {
        return callback(num1, num2);
    }

    // Addition callback function
    const addition = function(num1, num2) {
        return num1 + num2;
    };

    // Multiplication callback function
    const multiplication = function(num1, num2) {
        return num1 * num2;
    };

    // Perform addition operation
    const additionResult = operation(num1, num2, addition);
    console.log("Addition result:", additionResult);

    // Perform multiplication operation
    const multiplicationResult = operation(num1, num2, multiplication);
    console.log("Multiplication result:", multiplicationResult);
}

// Test the calculate function with different numbers
calculate(5, 3); // Output: Addition result: 8, Multiplication result: 15
calculate(10, 2); // Output: Addition result: 12, Multiplication result: 20
