const isValidEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const validateEmail = email => {
  if (isValidEmail(email)) {
    return { valid: true, message: "" }
  } else {
    return { valid: false, message: `Please enter a valid email.` }
  }
}
