import React, { useRef, useState } from "react"

import styled from "styled-components"
import {
  animated,
  useTransition,
  useSpring,
  useSprings,
  useChain,
} from "react-spring"

const StatementsArr = [
  { key: "statement-0", heading: "reliable-0", content: "wut" },
  { key: "statement-1", heading: "reliable-1", content: "wut" },
  { key: "statement2-2", heading: "reliable-2", content: "wut" },
]

const CarouselContent = styled(animated.div)`
  display: flex;
`

const CarouselTainr = styled(animated.div)`
  background: red;
  width: 100%;
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

const Statements = ({ statements }) => {
  const [statementIndex, setStatementIndex] = useState(0)

  const statementsRefs = statements.map(() => useRef())
  const statementsProps = useSprings(statements.length, (item, idx) => ({
    ref: statementsRefs[idx],
    opacity: statementIndex === idx ? 1 : 0,
  }))

  const imageSpringRef = useRef()
  const imageProps = useSpring({
    ref: imageSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  //   const imageProps = useTransition()
  useChain([...statementsRefs])

  return (
    <CarouselTainr>
      <CarouselContent>
        {statementsProps.map(({ key, item, props }) => {
          const { heading, content } = item
          return (
            <StatementContent key={key} style={props}>
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
              setStatementIndex(idx)
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
