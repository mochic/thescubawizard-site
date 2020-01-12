import React, { useContext } from "react"

import { Link as Link_ } from "gatsby"

import styled from "styled-components"
import { animated, useSpring } from "react-spring"

import PropTypes from "prop-types"

import SchedulingContext from "../../contexts/scheduling.context"

import { phoneFormatter } from "../../utils"

const P = styled(animated.p)`
  color: white;
  font-size: 20px;
  font-family open sans;
  line-height: 200%;
  margin: 0 0 8px 0;
  padding: 0;
`

const H2 = styled(animated.h2)``

const Button = styled(animated.button)`
  color: #979797;
  font-size: 14px;
  font-family open sans;
  margin: 0px;
  font-weight: 300;
  margin: 0 0 8px 0;
  padding: 0;
  background: none;
  border: none;

  -webkit-appearance: none;
`

const StatementTainr = styled(animated.div)``

const Link = styled(Link_)`
  font-family: open sans;
  font-weight: 300;
  color: white;
  text-decoration: none;
  text-align: center;
`

// const Scheduled = () => {
//   const {
//     submitted: { emailAddress, phoneNumber },
//     resetSubmission,
//   } = useContext(SchedulingContext)

//   let formattedPhoneNumber
//   if (phoneNumber) {
//     formattedPhoneNumber = phoneFormatter(phoneNumber, ``)
//   }

//   console.log("rendering scheduled with: ", {
//     emailAddress,
//     phoneNumber,
//     formattedPhoneNumber,
//   })

//   return (
//     <>
//       {formattedPhoneNumber || emailAddress ? (
//         <StatementTainr>
//           <P>I'll try to contact you at</P>
//           <P>{formattedPhoneNumber || emailAddress}</P>
//           <P>in the next two to three business days.</P>
//         </StatementTainr>
//       ) : (
//         <StatementTainr>
//           <P>There was an issue scheduling a chat.</P>
//         </StatementTainr>
//       )}
//       <Link>Home.</Link>
//       <Button
//         onClick={e => {
//           e.preventDefault()
//           resetSubmission()
//         }}
//       >
//         reschedule
//       </Button>
//     </>
//   )
// }

export default () => {
  const {
    submitted: { emailAddress, phoneNumber },
    resetSubmission,
  } = useContext(SchedulingContext)

  let formattedPhoneNumber
  if (phoneNumber) {
    formattedPhoneNumber = phoneFormatter(phoneNumber, ``)
  }

  console.log("rendering scheduled with: ", {
    emailAddress,
    phoneNumber,
    formattedPhoneNumber,
  })

  return (
    <>
      <Link to="/another10">Home.</Link>
      <Button
        onClick={e => {
          e.preventDefault()
          resetSubmission()
        }}
      >
        Reschedule.
      </Button>
    </>
  )
}
