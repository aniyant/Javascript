
// Define an array with some random integer values
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define the filterArray function
function filterArray(arr, callback) {
    // Create an empty array to store filtered elements
    const filteredArray = [];

    // Iterate over each element of the arr array
    for (let i = 0; i < arr.length; i++) {
        // Call the callback function on each element
        // The callback function checks if the element is even or odd
        // and returns true for even elements and false for odd elements
        if (callback(arr[i])) {
            filteredArray.push(arr[i]); // Add the element to the filtered array
        }
    }

    // Return the filtered array
    return filteredArray;
}

// Define the callback function
function callback(element) {
    // Check if the current element is even or odd
    // and return true for even elements and false for odd elements
    return element % 2 === 0;
}

// Call the filterArray function with the numbers array and the callback function
const filteredNumbers = filterArray(numbers, callback);

// Display the original array and the filtered array using console.log()
console.log("Original Array:", numbers);
console.log("Filtered Array (Even Numbers):", filteredNumbers);
