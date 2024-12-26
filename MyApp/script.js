function check() {
    // Prevent the form from submitting
    event.preventDefault();

    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    const validUsername = "subitsha";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        // alert("Login successful!");
        window.location.href="welcome.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

