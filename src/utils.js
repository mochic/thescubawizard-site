import { parsePhoneNumberFromString, AsYouType } from "libphonenumber-js"

// // if these are broked go here fam: https://regex101.com/
// export const parsePhoneNumber = phoneNumber => {
//   const pattern = /^(?<country>1|\+1)?(?: )?\(?(?<area>[0-9]{0,3})\)?(?: )?(?<prefix>[0-9]{0,3})-?(?<line>[0-9]{0,4})\s?$/
//   const matched = phoneNumber.match(pattern)
//   return matched ? matched.groups : {}
// }

//stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address/44317754
const maxEmailUserLength = 64
const maxEmailDomainLength = 255
export const isValidEmail = emailAddress => {
  // could have put in regex but prefer explicit...also big complicated regexes scare me :/...
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
    return false
  }

  const [user, domain] = emailAddress.split("@")

  return (
    user.length <= maxEmailUserLength && domain.length <= maxEmailDomainLength
  )
}

export const isEmptyString = str => {
  return !/\S/.test(str)
}

// /**
//  * isValidPhone() validates phone number
//  *
//  * @param {String} phone
//  *
//  * only validates a very specific format
//  * because we only accept us numbers and
//  * rely on the input for formatting
//  */
// export const isValidPhone = phoneNumber => {
//   const { country, area, prefix, line } = parsePhoneNumber(phoneNumber)

//   if (country === 1 && !(area || prefix || line)) {
//     console.log("Weird only country situation", "color: #ff00ff")
//     return true
//   }

//   return !!(
//     area &&
//     area.length === 3 &&
//     (prefix && prefix.length === 3) &&
//     (line && line.length === 4)
//   ) // !! converts truthy values to true and falsey values to false (ie: null, undefined, etc.)
// }

export const isValidPhone = phoneNumber => {
  const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, "US")
  return parsedPhoneNumber ? parsedPhoneNumber.isValid() : false
}

// export const validatePhone = phoneNumber => {
//   if (isEmptyString(phoneNumber)) {
//     return `Phone number appears to be empty.`
//   } else if (!isValidPhone(phoneNumber)) {
//     return `Please enter a valid phone number.`
//   } else {
//     return
//   }
// }

export const validatePhone = phoneNumber => {
  if (isEmptyString(phoneNumber)) {
    return // todo: maybs move this logic to higher level handler...
  } else if (!isValidPhone(phoneNumber)) {
    return `Please enter a valid phone number.`
  } else {
    return
  }
}

// export const validateEmail = emailAddress => {
//   if (isEmptyString(emailAddress)) {
//     return `Email address appears to be empty.`
//   } else if (!isValidEmail(emailAddress)) {
//     return `Please enter a valid email address.`
//   } else {
//     return
//   }
// }

export const validateEmail = emailAddress => {
  if (isEmptyString(emailAddress)) {
    return
  } else if (!isValidEmail(emailAddress)) {
    return `Please enter a valid email address.`
  } else {
    return
  }
}

// /**
//  * formats a phone number
//  * @param {string} current - current input value
//  * @param {string} previous - previous input value
//  * TODO: this is getting really complicated, refactor...
//  */
// export const phoneFormatter = (current, previous) => {
//   if (current.length < previous.length) {
//     return current
//   }

//   const { area, prefix, line } = parsePhoneNumber(current)

//   let formattedPhoneNumber = ""
//   if (area) {
//     formattedPhoneNumber = `(${area}${area.length === 3 ? `) ` : ``}`
//   }

//   if (prefix) {
//     formattedPhoneNumber += `${prefix}${prefix.length === 3 ? `-` : ``}`
//   }

//   if (line) {
//     formattedPhoneNumber += line
//   }

//   if (!formattedPhoneNumber && current === "(") {
//     return current
//   }

//   /**
//    * exclusively handles the case:
//    * (808) 223-55455 -> (808) 223-5545
//    */
//   if (
//     !formattedPhoneNumber &&
//     current.length > previous.length &&
//     isValidPhone(previous)
//   ) {
//     return previous
//   }

//   return formattedPhoneNumber
// }

// /**
//  * transforms valid phone number into specific format the api
//  * is expecting
//  * @param {String} phoneNumber - valid phone number
//  * @returns {String} - transformed phone number
//  */
// export const processPhoneNumber = phoneNumber => {
//   const { area, prefix, line } = parsePhoneNumber(phoneNumber)
//   const processed = `1${area}${prefix}${line}`

//   if (processed.length !== 11) {
//     throw new Error(
//       `Proccessed phone number isnt the correct length. Got ${processed.length}`
//     )
//   }

//   return processed
// }

// const asYouType = new AsYouType("US")

export const emailFormatter = (current, previous) => {
  // doesn't really do anything...just supporting an interface with this...
  return current
}

export const phoneFormatter = (current, previous) => {
  // when delete occurs?
  // maybs only do this for critcal periods...
  // like when we only hav a country code, etc...
  // its better for reformatting numbers when we type way to much and
  // delete back
  if (current.length < previous.length) {
    return current
  }

  const phoneNumber = new AsYouType("US").input(current)
  return phoneNumber ? phoneNumber : current
}

export const sanitizeEmail = emailAddress => {
  return emailAddress
}

export const sanitizePhone = phoneNumber => {
  // maybs this logic is wrong...TODO rethink this...
  const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, "US")
  return parsedPhoneNumber ? parsedPhoneNumber.number : ""
}
