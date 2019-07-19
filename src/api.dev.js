export default async (phone, email) => {
  console.log(`%csubmitting to mock api...`, "color: orange", {
    phone: phone,
    email: email,
  })
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    submitted: { phone: phone !== null, email: email !== null },
    errors: {},
  }
}
