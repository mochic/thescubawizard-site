export default async (phone, email) => {
  const result = {}

  if (phone) {
    result.phone = { submitted: true, errors: [] }
    console.log("submitted phone to api")
  } else {
    result.phone = { submitted: false, errors: [] }
  }

  if (email) {
    result.email = { submitted: true, errors: [] }
    console.log("submitted email to api")
  } else {
    result.email = { submitted: false, errors: [] }
  }

  return result
}
