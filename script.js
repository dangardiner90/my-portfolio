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

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email').value;


function validateEmailInput() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        emailInput.textContent = "Thank you";
    } else {
        alert("Please enter a valid email address.");
    }
}

form.addEventListener('submit', function (event) {

    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
    } 

})
