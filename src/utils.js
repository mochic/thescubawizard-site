import devices from "./devices"

let submitToAPI
if (process.env.NODE_ENV === "production") {
  submitToAPI = require("./api.prod.js").default
} else {
  submitToAPI = require("./api.dev.js").default
}

export const parsePhoneNumber = phoneNumber => {
  const pattern = /^\(?(?<area>[0-9]{0,3})\)?(?: )?(?<prefix>[0-9]{0,3})-?(?<line>[0-9]{0,4})/
  return phoneNumber.match(pattern).groups
}

export const isValidEmail = emailAddress => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
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
export const isValidPhone = phoneNumber => {
  const { area, prefix, line } = parsePhoneNumber(phoneNumber)
  return (
    phoneNumber.length === 0 ||
    (area &&
      area.length === 3 &&
      (prefix && prefix.length === 3) &&
      (line && line.length === 4))
  )
}

export const validatePhone = phoneNumber => {
  if (isEmptyString(phoneNumber)) {
    return `Phone number appears to be empty.`
  } else if (!isValidPhone(phoneNumber)) {
    return `Please enter a valid phone number.`
  } else {
    return
  }
}

export const validateEmail = emailAddress => {
  if (isEmptyString(emailAddress)) {
    return `Email address appears to be empty.`
  } else if (!isValidEmail(emailAddress)) {
    return `Please enter a valid email address.`
  } else {
    return
  }
}

export const phoneFormatter = (current, previous) => {
  if (current.length < previous.length) {
    return current
  }

  const { area, prefix, line } = parsePhoneNumber(current)

  let formattedPhoneNumber
  if (area) {
    formattedPhoneNumber = `(${area}${area.length === 3 ? `) ` : ``}`
  }

  if (prefix) {
    formattedPhoneNumber += `${prefix}${prefix.length === 3 ? `-` : ``}`
  }

  if (line) {
    formattedPhoneNumber += line
  }

  if (!formattedPhoneNumber && current === "(") {
    return current
  }

  return formattedPhoneNumber
}
