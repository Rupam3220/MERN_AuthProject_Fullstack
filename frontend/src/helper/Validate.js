import toast from "react-hot-toast";


                                        // Username, Email, Password validation

// Username validation
function varifyUsername (error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username Required!')
    }
    else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid Username!')
    }

    return error
}


// Email validation
function varifyEmail (error = {}, values) {
    if (!values.email) {
        error.email = toast.error('Email Required!')
    }
    else if (values.email.includes(" ")) {
        error.email = toast.error('Incorrect email, please try with another one!')
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error('Invalid email!')
    }
    return error
}


// Password validation
function varifyPassword (error = {}, values) {

    const specialCharacters = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const regex = /[A-Z]/;

    if (!values.password) {
        error.password = toast.error('Password Required!')
    }
    else if (values.password.includes(" ")) {
        error.password = toast.error('Incorrect password, please try with another password!')
    }
    else if (values.password.length < 8) {
        error.password = toast.error('Password must be 8 characters long!')
    }
    else if (!specialCharacters.test(values.password)) {
        error.password = toast.error('Password must have a special chracter!')
    } 
    else if (!regex.test(values.password)) {
        error.password = toast.error('Password must have at lease one uppercase!')
    }
 
    return error
}




// ---------------------------------------------------------------------



                                        // USERNAME / LOGIN

// Username validation for username.js
export async function validateUsername (values) {
    const error = varifyUsername({}, values)

    return error
}


// ---------------------------------------------------------------------


                                        // PASSOWRD

// password validation for password.js
export async function validatePassword (values) {
    const error = varifyPassword({}, values)

    return error
}


// ---------------------------------------------------------------------


                                        // REGISTER
                                        
// Register for validation for register.js
export async function validateRegister (values) {
    const errors = varifyUsername({}, values)
    varifyPassword(errors, values)
    varifyEmail(errors, values)

    return errors
} 


// ---------------------------------------------------------------------


                                        // RESET-PASSOWRD

// Reset password validation for reset.js
export async function validateResetPassword (values) {
    const errors = varifyPassword({}, values)

    if(values.password !== values.confirmPassword) {
        errors.exist = toast.error("Password and Confirm passwords are not matching!")
    }

    return errors
}


// ---------------------------------------------------------------------


                                        // PROFILE

// Profile page validation for profile.js
export async function validateProfile (values) {
    const errors = varifyEmail({}, values)

    return errors
}


// ---------------------------------------------------------------------