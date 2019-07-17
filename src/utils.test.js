import { isValidEmail, isValidPhone } from "./utils"

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

describe(`isValidPhone`, () => {
  it(`validates phone #0`, () => {
    expect(isValidPhone(`8082235545`)).toBe(true)
  })
  it(`validates phone #1`, () => {
    expect(isValidPhone(`(808) 223-5545`)).toBe(true)
  })
  it(`validates phone #2`, () => {
    expect(isValidPhone(`808-223-5545`)).toBe(true)
  })
  it(`validates phone #3`, () => {
    expect(isValidPhone(`808 223 5545`)).toBe(true)
  })
  it(`validates phone #4`, () => {
    expect(isValidPhone(`808-223 5545`)).toBe(true)
  })
  it(`validates phone #5`, () => {
    expect(isValidPhone(`1-808-223-5545`)).toBe(true)
  })
})
