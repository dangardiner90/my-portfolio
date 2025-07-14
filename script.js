// JavaScript for my website functionality
// Future updates:
// - Change displayText() to one function instead of 3
// - Add scrolling text for about me section (like typing the text in a terminal maybe?)
// - Fix form validation for more consistency

// Project section text display function:
// Project 1
function displayTextOne() {
    var text = document.getElementById("textField1");
    var button = document.getElementById("project1")
    if (text.style.display === "none") {
        text.style.display = "block";
        button.innerHTML = "Project 1 - Show less"
    } else {
        text.style.display = "none";
        button.innerHTML = "Project 1"
    }
};

// Project 2
function displayTextTwo() {
    var text = document.getElementById("textField2");
    var button = document.getElementById("project2")
    if (text.style.display === "none") {
        text.style.display = "block";
        button.innerHTML = "Project 2 - Show less"
    } else {
        text.style.display = "none";
        button.innerHTML = "Project 2"
    }
};

// Project 3
function displayTextThree() {
    var text = document.getElementById("textField3");
    var button = document.getElementById("project3")
    if (text.style.display === "none") {
        text.style.display = "block";
        button.innerHTML = "Project 3 - Show less"
    } else {
        text.style.display = "none";
        button.innerHTML = "Project 3"
    }
};


// Form validation:

const form = document.getElementById('registerForm');

// Inputs
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


// Errors
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');




form.addEventListener('submit', function (event) {
    nameError.textContent = '';
    emailError.textContent = '';
    

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        event.preventDefault();
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        event.preventDefault();
    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        event.preventDefault();
    }


})

function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email));
}
