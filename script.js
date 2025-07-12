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

