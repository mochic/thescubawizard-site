import {
  isValidEmail,
  isValidPhone,
  isEmptyString,
  phoneFormatter,
  processPhoneNumber,
} from "./utils"

// describe(`isValidEmail`, () => {
//   it(`valiates email #0`, () => {
//     expect(isValidEmail(`mochic808@gmail.com`)).toBe(true)
//   })
//   it(`valiates email #1`, () => {
//     expect(isValidEmail(`chrism@yahoo.com`)).toBe(true)
//   })
//   it(`valiates email #2`, () => {
//     expect(isValidEmail(`abc@`)).toBe(false)
//   })
//   it(`valiates email #3`, () => {
//     expect(isValidEmail(`abc@gmail`)).toBe(false)
//   })
//   it(`valiates weird-stuff #0`, () => {
//     expect(isValidEmail(``)).toBe(false)
//   })
//   it(`valiates weird-stuff #1`, () => {
//     expect(isValidEmail(`      `)).toBe(false)
//   })
//   it(`valiates weird-stuff #2`, () => {
//     expect(isValidEmail(`1312313131`)).toBe(false)
//   })
// })

// describe(`isEmptyString`, () => {
//   it(`validates empty string #0`, () => {
//     expect(isEmptyString(`    `)).toBe(true)
//   })
//   it(`validates empty string #1`, () => {
//     expect(isEmptyString(`\n\t\n `)).toBe(true)
//   })
//   it(`validates empty string #2`, () => {
//     expect(isEmptyString(`\n\t1\n `)).toBe(false)
//   })
// })

// describe(`isValidPhone`, () => {
//   it(`validates phone #0`, () => {
//     expect(isValidPhone(`8082235545`)).toBe(true)
//   })
//   it(`validates phone #1`, () => {
//     expect(isValidPhone(`(808) 223-5545`)).toBe(true)
//   })
//   it(`validates phone #2`, () => {
//     expect(isValidPhone(`082235545`)).toBe(false)
//   })
//   it(`validates phone #3`, () => {
//     expect(isValidPhone(`118082235545`)).toBe(false)
//   })
//   it(`validates phone #4`, () => {
//     expect(isValidPhone(`18082235545`)).toBe(true)
//   })
//   it(`validates phone #5`, () => {
//     expect(isValidPhone(`+18082235545`)).toBe(true)
//   })
//   it(`validates phone #6`, () => {
//     expect(isValidPhone(`1 (808) 223-5545`)).toBe(true)
//   })
//   it(`validates phone #7`, () => {
//     expect(isValidPhone(`+1 (808) 223-5545`)).toBe(true)
//   })
//   it(`validates phone #8`, () => {
//     expect(isValidPhone(`+18082235545` + String.fromCharCode(32))).toBe(true)
//   })
//   it(`validates phone #10`, () => {
//     expect(isValidPhone(`11111111111`)).toBe(true)
//   })
//   it(`validates phone #10`, () => {
//     expect(isValidPhone(`+11111111111`)).toBe(true)
//   })
// })

// describe("phoneFormatter", () => {
//   it(`formats phone #0`, () => {
//     expect(phoneFormatter("8", "")).toEqual("(8")
//   })
//   it(`formats phone #1`, () => {
//     expect(phoneFormatter("(808", "(80")).toEqual("(808) ")
//   })
//   it(`formats phone #2`, () => {
//     expect(phoneFormatter("(808) 223", "(808) 22")).toEqual("(808) 223-")
//   })
//   it(`formats phone #3`, () => {
//     expect(phoneFormatter("(808) 223-5545", "(808) 223-554")).toEqual(
//       "(808) 223-5545"
//     )
//   })
//   it(`formats phone #4`, () => {
//     expect(phoneFormatter("(808) 223-55455", "(808) 223-5545")).toEqual(
//       "(808) 223-5545"
//     )
//   })
//   it(`formats phone #5`, () => {
//     expect(phoneFormatter("", "(")).toEqual("")
//   })
//   it(`formats phone #6`, () => {
//     expect(phoneFormatter("(800", "(800)")).toEqual("(800")
//   })
//   /**
//    * no idea how this situation would occur, but its
//    * good to not completely break incase it happens
//    */
//   it(`formats phone #7`, () => {
//     expect(phoneFormatter("(800", "(800) ")).toEqual("(800")
//   })
// })

// describe("processPhoneNumber", () => {
//   it(`processes phone #0`, () => {
//     expect(processPhoneNumber("(808) 223-5545")).toEqual("18082235545")
//   })
// })

describe("phoneFormatter", () => {
  it(`formats phone #0`, () => {
    expect(phoneFormatter("8", "")).toEqual("(8")
  })
  it(`formats phone #1`, () => {
    expect(phoneFormatter("(808", "(80")).toEqual("(808) ")
  })
  it(`formats phone #2`, () => {
    expect(phoneFormatter("(808) 223", "(808) 22")).toEqual("(808) 223-")
  })
  it(`formats phone #3`, () => {
    expect(phoneFormatter("(808) 223-5545", "(808) 223-554")).toEqual(
      "(808) 223-5545"
    )
  })
  it(`formats phone #4`, () => {
    expect(phoneFormatter("(808) 223-55455", "(808) 223-5545")).toEqual(
      "(808) 223-5545"
    )
  })
  it(`formats phone #5`, () => {
    expect(phoneFormatter("", "(")).toEqual("")
  })
  it(`formats phone #6`, () => {
    expect(phoneFormatter("(800", "(800)")).toEqual("(800")
  })
  /**
   * no idea how this situation would occur, but its
   * good to not completely break incase it happens
   */
  it(`formats phone #7`, () => {
    expect(phoneFormatter("(800", "(800) ")).toEqual("(800")
  })
})
