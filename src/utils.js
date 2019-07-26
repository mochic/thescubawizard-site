import devices from "./devices"

let submitToAPI
if (process.env.NODE_ENV === "production") {
  submitToAPI = require("./api.prod.js").default
} else {
  submitToAPI = require("./api.dev.js").default
}

export const isValidEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const isEmptyString = str => {
  return !/\S/.test(str)
}

/**
 * isValidPhone() validates phone number
 *
 * @param{String} phone
 *
 * only validates a very specific format
 * because we only accept us numbers and
 * rely on the input for formatting
 */
export const isValidPhone = phone => {
  return /^1?[0-9]{10}$/.test(phone)
}

export const validatePhone = phone => {
  return !isEmptyString(phone) && !isValidPhone(phone)
    ? `Phone number appears to be invalid.`
    : null
}

export const validateEmail = email => {
  return !isEmptyString(email) && !isValidEmail(email)
    ? `Email address appears to be invalid.`
    : null
}

export default async (phone, email) => {
  const errors = {}
  let submitted // we will override later based on validation/api results...

  if (isEmptyString(phone)) {
    errors.phone = `Phone number appears to be empty.`
  }

  if (isEmptyString(email)) {
    errors.email = `Email address appears to be empty.`
  }

  if (!errors.phone && !isValidPhone(phone)) {
    errors.phone = `Phone number appears to be invalid.`
  }

  if (!errors.email && !isValidEmail(email)) {
    errors.email = `Email address apears to be invalid.`
  }

  if (!errors.phone || !errors.email) {
    const { errors: apiErrors, submitted: submittedToAPI } = await submitToAPI(
      !errors.phone ? phone : null,
      !errors.email ? email : null
    )

    if (!errors.phone && apiErrors.phone) {
      errors.phone = apiErrors.phone
    }

    if (!errors.email && apiErrors.email) {
      errors.email = apiErrors.email
    }

    submitted = { ...submittedToAPI }
  } else {
    submitted = { phone: false, email: false }
  }

  return { errors, submitted }
}
