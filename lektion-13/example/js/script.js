function handleSignInForm(event) {
    event.preventDefault()
    document.getElementById('signInForm_error').classList.add('d-none')

    let json = JSON.stringify({
        email: event.target[0].value,
        password: event.target[1].value
    })

    event.target[0].value = ''
    event.target[1].value = ''

    fetch('https://netfund22-webapi.azurewebsites.net/api/authentication/signin', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(async response => {
        const data = await response.text()

        if (response.ok)
            return data

        return Promise.reject(data)
    })
    .then(data => {
        sessionStorage.setItem('accessToken', data)
    })
    .catch(error => {
        event.target[1].value = ''
        document.getElementById('signInForm_error').classList.remove('d-none')
        document.getElementById('signInForm_errorMessage').innerHTML = `<strong>${error}.</strong> If you don't have an account, please register a new account.`
    })
}



function handleSignUpForm(event) {
    event.preventDefault()
    document.getElementById('signUpForm_error').classList.add('d-none')

    let json = JSON.stringify({
        firstName: event.target[0].value,
        lastName: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value
    })

    fetch('https://netfund22-webapi.azurewebsites.net/api/authentication/signup', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(async response => {
        const data = await response.text()

        if (response.ok)
            return data

        return Promise.reject(data)
    })
    .then(data => {
        event.target[0].value = ''
        event.target[1].value = ''
        event.target[2].value = ''
        event.target[3].value = ''
        event.target[4].value = ''

        if(data) {
            document.getElementById('signUpForm_success').classList.remove('d-none')
            document.getElementById('signUpForm_successMessage').innerHTML = `<strong>Your account was created successfully.</strong> Please sign in to access your account.` 
        }

    })
    .catch(error => {
        document.getElementById('signUpForm_error').classList.remove('d-none')
        document.getElementById('signUpForm_errorMessage').innerHTML = `<strong>Something went wrong when we tried to create your account.</strong> ${error}`
    })
}