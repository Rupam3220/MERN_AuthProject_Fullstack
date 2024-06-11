import toast from "react-hot-toast";

                                        // USERNAME

// Username validation for login page
export async function validateUsername (values) {
    const error = verifyUsername({}, values)

    return error
}

// Username validation
function verifyUsername (error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username Required!')
    }
    else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid Username!')
    }

    return error
}

// ---------------------------------------------------------------------


                                        // PASSOWRD

// password validation for login page
export async function validatePassword (values) {
    const error = verifyPassword({}, values)

    return error
}

// Password validation
function verifyPassword (error = {}, values) {

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


                                        // RESET-PASSOWRD

