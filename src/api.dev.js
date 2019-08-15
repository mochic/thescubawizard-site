const blacklist = {
  emailAddress: ["something@gmail.com"],
  phoneNumber: ["00000000000"],
}

/**
 * mock api call, should return error if emailAddress
 * or phoneNumber "blacklisted"
 * @param {String} emailAddress
 * @param {String} phoneNumber - 11 character string-ified
 * phone number
 * @returns [{Object},{Boolean}] - values submitted to api,
 * whether or not api errored out...
 */
export default async (emailAddress, phoneNumber) => {
  console.log(`%csubmitting to mock api...`, "color: orange", {
    phoneNumber,
    emailAddress,
  })
  await new Promise(resolve => setTimeout(resolve, 3000))

  if (
    (!emailAddress && !phoneNumber) ||
    (blacklist.emailAddress.includes(emailAddress) ||
      blacklist.phoneNumber.includes(phoneNumber))
  ) {
    return {}, true
  }

  return (
    {
      phoneNumber: phoneNumber ? phoneNumber : null,
      emailAddress: emailAddress ? emailAddress : null,
    },
    false
  )
}
