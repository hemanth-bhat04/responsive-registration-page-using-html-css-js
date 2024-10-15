let users = [];

document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        loginEmail: document.getElementById('loginEmail').value,
        password: document.getElementById('password').value,
        tenthMarks: document.getElementById('tenthMarks').value,
        tenthYear: document.getElementById('tenthYear').value,
        twelfthMarks: document.getElementById('twelfthMarks').value,
        twelfthYear: document.getElementById('twelfthYear').value,
        degreeType: document.getElementById('degreeType').value,
        degree: document.getElementById('degree').value,
        semester: document.getElementById('semester').value,
        regNo: document.getElementById('regNo').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        motherTongue: document.getElementById('motherTongue').value,
        guardianName: document.getElementById('guardian').value,
        occupation: document.getElementById('occupation').value,
        aspiration: document.getElementById('aspiration').value
    };

    // Add the new user to the users array
    users.push(formData);

    // Store the updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Display a success message
    alert('Registration successful! Data has been saved.');

    // Clear the form
    event.target.reset();
});

// Function to search for a user by email
function searchUser(email) {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = storedUsers.find(user => user.email === email || user.loginEmail === email);
    
    if (foundUser) {
        console.log('User found:', foundUser);
        return foundUser;
    } else {
        console.log('User not found');
        return null;
    }
}

// Example usage of the search function (you can call this from a button click or any other event)
function handleSearch() {
    const searchEmail = prompt('Enter the email to search for:');
    if (searchEmail) {
        const user = searchUser(searchEmail);
        if (user) {
            alert(`User found:\nName: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}`);
        } else {
            alert('User not found');
        }
    }
}

// Load existing users from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    users = JSON.parse(localStorage.getItem('users')) || [];
});

// Add a search button to the HTML (you can add this in your HTML file)
// <button onclick="handleSearch()">Search User</button>