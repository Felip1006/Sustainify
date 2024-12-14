document.getElementById('loginForm').addEventListener('submit', handleLogin);

function handleLogin(event) {
    console.log("Login function triggered");
    event.preventDefault();

    const form = event.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    // Check for empty fields
    if (!username || !password) {
        alert("Please fill in both fields.");
        return; // Exit the function if fields are empty
    }

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    console.log("Entered Username:", username);
    console.log("Entered Password:", password);
    console.log("Stored Username:", storedUsername);
    console.log("Stored Password:", storedPassword);

    // Debugging comparison
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "homepage.html"; // Redirect to homepage
    } else {
        alert("Invalid username or password.");
        console.error("Login failed: ", { enteredUsername: username, enteredPassword: password, storedUsername, storedPassword });
    }
}

// localStorage.setItem('username', 'Felip');
// localStorage.setItem('password', '123456');

// console.log(localStorage.getItem('username'));
// console.log(localStorage.getItem('password'));
