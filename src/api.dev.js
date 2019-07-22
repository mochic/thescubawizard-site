export default async (phone, email) => {
  console.log(`%csubmitting to mock api...`, "color: orange", {
    phone: phone,
    email: email,
  })
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    submitted: {
      phone: { value: phone ? phone : null },
      email: { value: email ? email : null },
    },
    errors: {},
  }
}
