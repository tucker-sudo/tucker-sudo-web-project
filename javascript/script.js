const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const submittedElement = document.getElementById('submitted')

form.addEventListener('submit', (e) => {
    let hasError = false
    nameError.innerText = ''
    emailError.innerText = ''

    if (name.value === '' || name.value == null) {
        nameError.innerText = '*Name is required'
        hasError = true
    }

    if (email.value === '' || email.value == null) {
        emailError.innerText = '*Email is required'
        hasError = true
    } else {
        const emailPattern = /^[^@]+@[^@]+\.[^@]+$/
        if (!emailPattern.test(email.value)) {
            emailError.innerText = `*"${email.value}" is not a valid email address`
            hasError = true
        }
    }

    if (hasError) {
        e.preventDefault()
    } else {
        e.preventDefault()
        form.style.display = 'none'
        submittedElement.innerText = name.value + ' <' + email.value + '> has been added to our subscription list!'
        submittedElement.style.display = 'block'
    }
})