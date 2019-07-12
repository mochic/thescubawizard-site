export const isValidEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const validateEmail = email => {
  if (isValidEmail(email)) {
    return { valid: true, message: "" }
  } else {
    return { valid: false, message: `Please enter a valid email address.` }
  }
}

export const isValidPhone = phone => {
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
  const result = {
    validation: {
      email: validateEmail(email),
      phone: validatePhone(phone),
    },
    api: {},
  }

  if (result.validation.email.valid || result.validation.phone.valid) {
    if (result.validation.email.valid) {
      console.log("submitted email to api")
      result.api.phone = {}
    }
    if (result.validation.phone.valid) {
      console.log("submitted phone to api")
      result.api.email = {}
    }
  }

  return result
}
