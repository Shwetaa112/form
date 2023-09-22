document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Reset error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Validate fields
    if (username.length < 3) {
        document.getElementById("usernameError").textContent = "Username must be at least 3 characters long.";
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email address.";
        return;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        return;
    }

    // If all validation passes, you can submit the form or perform other actions here.
    alert("Registration successful!");
});

function validateEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}