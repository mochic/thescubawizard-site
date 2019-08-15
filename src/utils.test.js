import {
  isValidEmail,
  isValidPhone,
  isEmptyString,
  processPhoneNumber,
} from "./utils"

describe(`isValidEmail`, () => {
  it(`valiates email #0`, () => {
    expect(isValidEmail(`mochic808@gmail.com`)).toBe(true)
  })
  it(`valiates email #1`, () => {
    expect(isValidEmail(`chrism@yahoo.com`)).toBe(true)
  })
  it(`valiates email #2`, () => {
    expect(isValidEmail(`abc@`)).toBe(false)
  })
  it(`valiates email #3`, () => {
    expect(isValidEmail(`abc@gmail`)).toBe(false)
  })
  it(`valiates weird-stuff #0`, () => {
    expect(isValidEmail(``)).toBe(false)
  })
  it(`valiates weird-stuff #1`, () => {
    expect(isValidEmail(`      `)).toBe(false)
  })
  it(`valiates weird-stuff #2`, () => {
    expect(isValidEmail(`1312313131`)).toBe(false)
  })
})

describe(`isEmptyString`, () => {
  it(`validates empty string #0`, () => {
    expect(isEmptyString(`    `)).toBe(true)
  })
  it(`validates empty string #1`, () => {
    expect(isEmptyString(`\n\t\n `)).toBe(true)
  })
  it(`validates empty string #2`, () => {
    expect(isEmptyString(`\n\t1\n `)).toBe(false)
  })
})

describe(`isValidPhone`, () => {
  it(`validates phone #0`, () => {
    expect(isValidPhone(`18082235545`)).toBe(true)
  })
  it(`validates phone #1`, () => {
    expect(isValidPhone(`8082235545`)).toBe(true)
  })
  it(`validates phone #2`, () => {
    expect(isValidPhone(`082235545`)).toBe(false)
  })
  it(`validates phone #3`, () => {
    expect(isValidPhone(`118082235545`)).toBe(false)
  })
})

describe("processPhoneNumber", () => {
  it(`processes phone #0`, () => {
    expect(processPhoneNumber("(808) 223-5545")).toEqual("18082235545")
  })
})
