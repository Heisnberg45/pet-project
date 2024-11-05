document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');

    // Handle the sign-up form submission
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, username, email, password })
            });

            const data = await response.json();
            if (response.ok) {
                alert('Registration successful! You can now log in.');
                // Optionally, you can redirect to login or clear the form
                signupForm.reset();
            } else {
                alert(data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration.');
        }
    });

    // Handle the login form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                alert('Login successful!');
                // You can redirect to the dashboard or perform other actions here
                loginForm.reset();
            } else {
                alert(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login.');
        }
    });

    // Toggle between login and signup forms
    document.getElementById('show-login').addEventListener('click', () => {
        document.getElementById('signup-form').classList.add('hidden');
        document.getElementById('login-form').classList.remove('hidden');
    });

    document.getElementById('show-signup').addEventListener('click', () => {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('signup-form').classList.remove('hidden');
    });
});
