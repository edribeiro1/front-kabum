function validateUsername(username) {
    if (username.length < 5 || username.length > 72) {
        return {
            valid: false,
            message: 'O nome do usuário deve ser entre 5 e 72 dígitos'
        }
    } else {
        return {
            valid: true,
            message: ''
        }
    }
}

function validatePassword(password) {
    if (password.length < 6 || password.length > 72) {
        return {
            valid: false,
            message: 'A senha deve ter entre 6 e 72 dígitos'
        }
    } else {
        return {
            valid: true,
            message: ''
        }
    }
}


export {validatePassword, validateUsername};