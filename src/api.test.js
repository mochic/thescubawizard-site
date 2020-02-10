import { expect } from "chai"

import submitToAPI from "./api"

describe("submitToAPI", () => {
  it(`submits to api #0`, async () => {
    const [response, success] = await submitToAPI("mochic808@gmail.com", "")
    expect(response).to.include({ emailAddress: "mochic808@gmail.com" })
  })
  it(`submits to api #1`, async () => {
    const [response, success] = await submitToAPI(
      "mochic808@gmail.com",
      "+18082235545"
    )
    expect(response).to.include({
      emailAddress: "mochic808@gmail.com",
      phoneNumber: "+18082235545",
    })
  })
  it(`submits to api #2`, async () => {
    const [response, success] = await submitToAPI("", "+18082235545")
    expect(response).to.include({
      phoneNumber: "+18082235545",
    })
  })
})
