export default async ({ phone, email }) => {
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
