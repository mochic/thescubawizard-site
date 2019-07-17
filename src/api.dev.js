export default async ({ phone, email }) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    phone: { message: "success", errors: [] },
    email: { message: "success", errors: [] },
  }
}
