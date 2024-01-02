// Adding the j.s styles

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    // Get the values from the  input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // Username Validation
    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    }
    else if(usernameValue.length < 6){
        setErrorFor(username, 'Characters can not be less than 6')
    }
    else{
        setSuccessFor(username);
    }
    // Email Validation
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(emailValue.length < 12){
        setErrorFor(email, 'Characters cannot be less than 12')
    }
    else{
        setSuccessFor(email);
    }
    // Phone Number Validation
    if(phoneValue === ''){
        setErrorFor(phone, 'Phone Number cannot be blank')
    }
    else if(phoneValue.length < 10){
        setErrorFor(phone, 'Characters cannot be less than 10')
    }
    else{
        setSuccessFor(phone);
    }
    // Password Validation
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank')
    }
    else if(passwordValue.length < 10){
        setErrorFor(password, 'Characters cannot be less than 10')
    }
    else if(passwordValue != password2Value){
        setErrorFor(password, 'Password Mismatch')
    }
    else{
        setSuccessFor(password);
    }
    // Password2 Validation
    if(password2Value === ''){
        setErrorFor(password2, 'Password cannot be blank')
    }
    else if(password2Value.length < 10){
        setErrorFor(password2, 'Password cannot be less than 10')
    }
    else if(passwordValue != password2Value){
        setErrorFor(password2, 'Password Mismatch')
    }
    else{
        setSuccessFor(password2)
    }
}
    setErrorFor();
function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;
    // Add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; //.form-control
    // Add error class
    formControl.className = 'form-control success';
}