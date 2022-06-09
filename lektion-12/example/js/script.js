function validateEmail(event) {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regEx.test(event.target.value)) {
        document.getElementById(event.target.id).classList.add('is-invalid')
    } else {
        document.getElementById(event.target.id).classList.remove('is-invalid')
    }
}

function validatePassword(e) {
    // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
       
    if (!regEx.test(e.target.value)) {
        document.getElementById(e.target.id).classList.add('is-invalid')
    }
    else {
        document.getElementById(e.target.id).classList.remove('is-invalid')
    }
}

function validateMinLength(event, minLength) {
    if (event.target.value.length < minLength) {
        document.getElementById(event.target.id).classList.add('is-invalid')
    }
    else {
        document.getElementById(event.target.id).classList.remove('is-invalid')
    }   
}

function compareValues(event, elementToCompareWith) {
    if (event.target.value !== document.getElementById(elementToCompareWith).value) {
        document.getElementById(event.target.id).classList.add('is-invalid')
    }
    else {
        document.getElementById(event.target.id).classList.remove('is-invalid')
    }    
}


function submitSignInForm(event) {
    event.preventDefault()

    let user = {
        email: event.target['signIn_Email'].value,
        password: event.target['signIn_Password'].value
    }

    fetch('https://netfund22-webapi.azurewebsites.net/api/Authentication/SignIn', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => document.getElementById('errorMessage').innerText = data)

}


function submitSignUpForm(event) {
    event.preventDefault()
}