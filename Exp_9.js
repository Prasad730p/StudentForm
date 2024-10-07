document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = validateForm();

    if (isValid) {
        displayWelcomeMessage();
    }
});

document.getElementById('resetBtn').addEventListener('click', function() {
    resetForm(); // Call reset function on clicking the reset button
});

function validateForm() {
    let isValid = true;

    // Name validation
    let name = document.getElementById('name').value.trim();
    if (name === "") {
        showError('nameError', "Please enter your name");
        isValid = false;
    } else {
        hideError('nameError');
    }

    // Address validation
    let address = document.getElementById('address').value.trim();
    if (address === "") {
        showError('addressError', "Please enter your address");
        isValid = false;
    } else {
        hideError('addressError');
    }

    // City validation
    let city = document.getElementById('city').value.trim();
    if (city === "") {
        showError('cityError', "Please enter your city");
        isValid = false;
    } else {
        hideError('cityError');
    }

    // State validation
    let state = document.getElementById('state').value.trim();
    if (state === "") {
        showError('stateError', "Please enter your state");
        isValid = false;
    } else {
        hideError('stateError');
    }

    // Gender validation
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        showError('genderError', "Please select your gender");
        isValid = false;
    } else {
        hideError('genderError');
    }

    // Mobile validation (simple length and digit check)
    let mobile = document.getElementById('mobile').value.trim();
    if (mobile === "" || !/^\d{10}$/.test(mobile)) {
        showError('mobileError', "Please enter a valid 10-digit mobile number");
        isValid = false;
    } else {
        hideError('mobileError');
    }

    // Email validation (basic pattern check)
    let email = document.getElementById('email').value.trim();
    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('emailError', "Please enter a valid email address");
        isValid = false;
    } else {
        hideError('emailError');
    }

    return isValid;
}

function showError(id, message) {
    let errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(id) {
    let errorElement = document.getElementById(id);
    errorElement.style.display = 'none';
}

function displayWelcomeMessage() {
    document.getElementById('studentForm').style.display = 'none'; // Hide form
    document.getElementById('welcomeMessage').classList.remove('hidden'); // Show welcome message
    let name = document.getElementById('name').value.trim();
    document.getElementById('studentName').textContent = name;
}

// Reset form and error messages
function resetForm() {
    document.getElementById('studentForm').reset(); // Reset all input fields

    // Hide all error messages
    hideError('nameError');
    hideError('addressError');
    hideError('cityError');
    hideError('stateError');
    hideError('genderError');
    hideError('mobileError');
    hideError('emailError');

    // Show the form again in case it was hidden
    document.getElementById('studentForm').style.display = 'block';
    document.getElementById('welcomeMessage').classList.add('hidden'); // Hide the welcome message
}
