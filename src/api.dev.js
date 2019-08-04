export default async (phoneNumber, emailAddress) => {
  console.log(`%csubmitting to mock api...`, "color: orange", {
    phoneNumber,
    emailAddress,
  })
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    submitted: {
      phoneNumber: { value: phoneNumber ? phoneNumber : null },
      emailAddress: { value: emailAddress ? emailAddress : null },
    },
    errors: {},
  }
}
