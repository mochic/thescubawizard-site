export default async (phoneNumber, emailAddress) => {
  console.log(`%csubmitting to mock api...`, "color: orange", {
    phoneNumber,
    emailAddress,
  })
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    submitted: {
      phoneNumber: phoneNumber ? phoneNumber : null,
      emailAddress: emailAddress ? emailAddress : null,
    },
    errors: {},
  }
}
