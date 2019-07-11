const isValidEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const validateEmail = email => {
  if (isValidEmail(email)) {
    return { valid: true, message: "" }
  } else {
    return { valid: false, message: `Please enter a valid email address.` }
  }
}

const isValidPhone = phone => {
  return /^1?\s?\(([0-9]{3}\)|[0-9]{3})[0-9]{7}$/.test(phone)
}

export const validatePhone = phone => {
  if (isValidPhone(phone)) {
    return { valid: true, message: "" }
  } else {
    return { valid: false, message: `Please enter a valid phone number.` }
  }
}

export const submitToSchedulingAPI = ({ phone, email }) => {
  // validation = {
  //   email: validateEmail(emailAddress),
  //   phone: validatePhone(phoneNumber),
  // }
  // if (validation.email.valid || validation.phone.valid) {
  //   if validation.email.valid)
  //   console.log('submitted to api')
  // } else {
  // }
  console.log(`submitted to api: ${phone}, ${email}`)
}
