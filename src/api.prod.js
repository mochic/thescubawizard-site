import axios from "axios"

const postEndpoint = process.env.GATSBY_CONTACT_INFO_ENDPOINT

if (!postEndpoint) {
  throw new Error("Contact info post endpoint not configured.")
}

export default async (emailAddress, phoneNumber) => {
  let response
  try {
    response = await axios.post(postEndpoint, {
      phoneNumber,
      emailAddress,
    })
    console.log("%capi success", "color: teal", response)
  } catch (err) {
    console.log("%capi error", "color: red", err)
    return {}, true
  }

  return response.data, false
}
