document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create an object to send in the request
    const userData = {
        username: username,
        email: email,
        password: password
    };

    // Send the data to the backend using fetch API (POST request)
    fetch('http://your-backend-api.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)  // Convert the object to a JSON string
    })
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        // Handle success (show a success message, redirect, etc.)
        console.log('User registered successfully', data);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
});