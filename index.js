document.addEventListener('DOMContentLoaded', function() {
// Attach event listeners to form fields
var scoreElements = document.getElementsByClassName("score");
console.log(scoreElements,"scoreElements")
for (var i = 0; i < scoreElements.length; i++) {
    scoreElements[i].addEventListener('keyup', validateScore);
}  
document.getElementById('age').addEventListener('keyup', validateAge);
// Attach event listener to form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true; 
    var isValid = validateScore() && validateAge() && validateGender();
    if (isValid) {
        var formData = new URLSearchParams(new FormData(this)).toString();
        var nextPage = this.getAttribute('action') + '?' + formData;
        window.location.href = nextPage;
    }
});
// Validation function for score
function validateScore() { 
    var score = document.getElementsByClassName("score")[0].value;
    var error = document.getElementById("scoreError");
    var isValid = true;
    error.innerHTML = "";
    var onlyNum = /^[0-9]+(\.[0-9]{1})?$/;
    if (score === "") {
        error.innerHTML += "*Score must not be empty <br>";
        isValid = false; 
    } 
    else if (!onlyNum.test(score)) {
        error.innerHTML += "*Score must be a number or with 1 decimal number <br>";
        isValid = false;
    } 
    else if (score < 1 || score > 100) {
        error.innerHTML += "*Score must be between 1 and 100<br>";
        isValid = false;
    }

    return isValid;
}

// Validation function for age
function validateAge() {
    var age = document.getElementById("age").value;
    var onlyNum = /^\d*$/;
    console.log(age,"age")
    var error = document.getElementById("ageError");
    var isValid = true;
    error.innerHTML = "";

    if (age === "") {
        error.innerHTML += "*Age must not be empty <br>";
        isValid = false; 
    } else if (age < 1 || age > 100) {
        error.innerHTML += "*Age must be between 1 and 100<br>";
        isValid = false;
    }
    else if (!onlyNum.test(age)) {
        error.innerHTML += "*only numbers alowed <br>";
        isValid = false;
    }
    return isValid;
}

// Validation function for gender
function validateGender() {
    var gender = document.querySelectorAll('input[name="gender"]');
    var error = document.getElementById('genderError');
    var isValid = false;
    error.innerHTML = "";

    gender.forEach(function(opt) {
        if (opt.checked) {
            isValid = true;
        }
    });
    
    if (!isValid) {
        error.innerHTML = "*Please select a gender";
    }

    return isValid;
}


});
