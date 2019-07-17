let submitToAPI
if (process.env.NODE_ENV === "production") {
  submitToAPI = require("./api.prod.js").default
} else {
  submitToAPI = require("./api.dev.js").default
}

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

export default async ({ phone, email }) => {
  const result = {
    validation: {
      phone: validatePhone(phone),
      email: validateEmail(email),
    },
  }

  if (result.validation.phone.valid || result.validation.email.valid) {
    result.api = await submitToAPI({
      phone,
      email,
    })
  }

  return result
}
