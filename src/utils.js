export const parsePhoneNumber = phoneNumber => {
  const pattern = /^1?\(?(?<area>[0-9]{0,3})\)?(?: )?(?<prefix>[0-9]{0,3})-?(?<line>[0-9]{0,4})$/
  const matched = phoneNumber.match(pattern)
  return matched ? matched.groups : {}
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
 * @param {String} phone
 *
 * only validates a very specific format
 * because we only accept us numbers and
 * rely on the input for formatting
 */
export const isValidPhone = phoneNumber => {
  const { area, prefix, line } = parsePhoneNumber(phoneNumber)
  return (
    phoneNumber.length === 0 ||
    !!(
      area &&
      area.length === 3 &&
      (prefix && prefix.length === 3) &&
      (line && line.length === 4)
    ) // !! converts truthy values to true and falsey values to false (ie: null, undefined, etc.)
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

  let formattedPhoneNumber = ""
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

/**
 * transforms valid phone number into specific format the api
 * is expecting
 * @param {String} phoneNumber - valid phone number
 * @returns {String} - transformed phone number
 */
export const processPhoneNumber = phoneNumber => {
  const { area, prefix, line } = parsePhoneNumber(phoneNumber)
  const processed = `1${area}${prefix}${line}`

  if (processed.length !== 11) {
    throw new Error(
      `Proccessed phone number isnt the correct length. Got ${processed.length}`
    )
  }

  return processed
}
