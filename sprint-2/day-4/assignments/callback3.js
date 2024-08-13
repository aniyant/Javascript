// Define the getUserData function
function getUserData(id, callback) {
    // Simulate an asynchronous API request to fetch user data after a delay of 2 seconds
    setTimeout(() => {
        // Create a dummy user object with properties like id, name, and email
        const user = {
            id: id,
            name: "John Doe",
            email: "john@example.com"
        };
        // Call the callback function and pass the user object
        callback(user);
    }, 2000); // Delay of 2 seconds
}

// Define the displayUser function
function displayUser(user) {
    // Display the user details using console.log()
    console.log("User Details:");
    console.log("ID:", user.id);
    console.log("Name:", user.name);
    console.log("Email:", user.email);
}

// Call the getUserData function with a user ID and the displayUser function as the callback
getUserData(123, displayUser);
