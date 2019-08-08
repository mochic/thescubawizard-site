const axios = require("axios")

const postEndpoint = null

export default async (phoneNumber, emailAddress) => {
  try {
    const response = await axios.post(postEndpoint, {
      phoneNumber,
      emailAddress,
    })
    console.log("%capi succes", "color: teal", response)
  } catch (err) {
    console.log("%capi error", "color: red", err)
  }

  return response
}
