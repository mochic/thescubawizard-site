import React, { useRef, useState } from "react"

import styled from "styled-components"
import { animated, useTransition, useSpring, useSprings } from "react-spring"

const StatementsArr = [
  { heading: "reliable-0", content: "wut" },
  { heading: "reliable-1", content: "wut" },
  { heading: "reliable-2", content: "wut" },
]

const CarouselContent = styled(animated.div)`
  display: flex;
`

const CarouselTainr = styled(animated.div)`
  background: red;
  width: ${StatementsArr.length * 100}%;
`

const CarouselNavTainr = styled(animated.div)``

const CarouselNavButton = styled(animated.button)`
  color: yellow;
  height: 20px;
  width: 20px;
  border-radius: 100%;
`

const StatementContent = styled(animated.div)`
  background: blue;
  width: 80%;
`

// const Statements = ({ statements }) => {
//   const statementIndex = useRef(0)

//   const fn = currentIndex => i => {
//     return { opacity: i === currentIndex ? 1 : 0 }
//   }

//   const [contentProps, setContentProps, stopContentProps] = useSpring(() => ({
//     opacity: 1,
//     transform: `translate3d(0%,0,0)`,
//   }))

//   const [statementProps, setStatementProps, stopStatementProps] = useSprings(
//     statements.length,
//     fn(statementIndex.current)
//   )

//   return (
//     <CarouselTainr>
//       <CarouselContent style={contentProps}>
//         {statementProps.map((props, idx) => {
//           const { heading, content } = statements[idx]
//           return (
//             <StatementContent style={props}>
//               <h3>{heading}</h3>
//               <p>{content}</p>
//             </StatementContent>
//           )
//         })}
//       </CarouselContent>
//       <CarouselNavTainr>
//         {statements.map((_, idx) => (
//           <CarouselNavButton
//             onClick={e => {
//               e.preventDefault()
//               setContentProps({ transform: `translate3d(${idx * -100}%,0,0)` })
//             }}
//           />
//         ))}
//       </CarouselNavTainr>
//     </CarouselTainr>
//   )
// }

const Statements = ({ statements }) => {
  const [statementIndex, setStatementIndex] = useState(0)

  const [contentProps, setContentProps, stopContentProps] = useSpring(() => ({
    opacity: 1,
    transform: `translate3d(0%,0,0)`,
  }))

  const [statementProps, setStatementProps, stopStatementProps] = useSprings(
    statements.length,
    idx => ({ opacity: idx === statementIndex ? 1 : 0 })
  )

  return (
    <CarouselTainr>
      <CarouselContent style={contentProps}>
        {statementProps.map((props, idx) => {
          const { heading, content } = statements[idx]
          return (
            <StatementContent style={props}>
              <h3>{heading}</h3>
              <p>{content}</p>
            </StatementContent>
          )
        })}
      </CarouselContent>
      <CarouselNavTainr>
        {statements.map((_, idx) => (
          <CarouselNavButton
            onClick={e => {
              e.preventDefault()
              setStatementProps(idx => ({
                opacity: 0,
                transform: `translate3d(0,${50}px,0)`,
              }))
              setContentProps({
                transform: `translate3d(${idx *
                  -(100 / statements.length)}%,0,0)`,
              })
              setStatementProps(idx => ({
                opacity: 1,
                transform: `translate3d(0,${-50}px,0)`,
              }))
            }}
          />
        ))}
      </CarouselNavTainr>
    </CarouselTainr>
  )
}

const StatementTainr = styled(animated.div)``

// for media queries
const ImageTainr = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  background: red;
`

const ContentTainr = styled(animated.div)``

export default () => {
  return <Statements className="statements" statements={StatementsArr} />
}
