import axios from "axios"

const postEndpoint = process.env.GATSBY_CONTACT_INFO_ENDPOINT

if (!postEndpoint) {
  throw new Error("Contact info post endpoint not configured.")
}

export default async (emailAddress, phoneNumber) => {
  let response
  try {
    console.info("%cposting to contact info endpoint...", "color: #34ebb1")
    response = await axios.post(postEndpoint, {
      phoneNumber,
      emailAddress,
    })
    console.info("%capi success", "color: #34ebb1", response.data)
  } catch (err) {
    console.warn("%capi error", "color: #eb4334", err)
    return [{}, true]
  }

  return [response.data, false]
}
