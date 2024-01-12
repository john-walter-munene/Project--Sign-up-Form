const inputs = document.querySelectorAll('input');

const patterns = {
    firstname: /^[a-z\d]{5,12}$/i,
    lastname: /^[a-z\d]{5,12}$/i,
    email: /^[a-z\d._%+-]+@[a-z\d.-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
    phone: /^\d{10}$/,
    password1: /^[\w@-]{8,20}$/,
    password2: /^[\w@-]{8,20}$/,
}

// Validation function.
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.remove('invalid');
        field.classList.add('valid');
    } else {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }
    console.log(regex.test(field.value));
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        // console.log(event.target.attributes.name.value);
        validate(event.target, patterns[event.target.attributes.name.value]);
    })
})

function validatePassword(password, repeatPassword) {
    if (password == repeatPassword) {
        console.log("Password validation successful");
        passwordText.textContent = "";
        return true;
    } else {
        console.log("Passwords do not match. Please try again.");
        passwordText.textContent = "Password mismatch.";
        passwordText.style.opacity = 1;
        passwordText.classList.remove('valid');
        passwordText.classList.add('invalid');
        return false;
    }
}

let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');
let passwordText = document.querySelector("input#password1 + p ");

passwordTwo.addEventListener('focusout', (event) => {
    validatePassword(passwordOne.value, passwordTwo.value);
})