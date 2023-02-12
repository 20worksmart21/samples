const ONLY_LETTER = /[A-Za-z]/;
const PASSWORD_REG = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const CAPITAL_REG = /[A-Z]/;
const LOWER_CASE_REG = /[a-z]/;
const NUMBER_REG = /[0-9]/;
const SEPCIAL_CASE = /[!@#$%^&*]/;
const ALLOW_CHA = /[a-zA-Z0-9!@#$%^&*]/;
const validatePhone = /^[0-9]{10,10}$/;
const EMAIL_REG = /@{1}(?=.+\.)/

export const passwordValidation = (password) => {
    const isValidate = PASSWORD_REG.test(password);
    if(isValidate){
        return true;
    }
    if(!CAPITAL_REG.test(password)){
        return 'No capital'
    }
    if(!LOWER_CASE_REG.test(password)){
        return 'No lower case'
    }
    if(!NUMBER_REG.test(password)){
        return'No number';
    }
    if(!SEPCIAL_CASE.test(password)){
        return"no SEPCIAL_CASE";
    }
    if(!ALLOW_CHA.test(password)){
        return"not allowed";
    }
    if(password.length < 8){
        return"not long enough";
    }
    return false
}

export const phoneValidate = (phone) => {
    return validatePhone.test(phone);
}

export const validateEmail = (email) => {
    return EMAIL_REG.test(email)
}
