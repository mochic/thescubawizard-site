import React, { useRef, useState } from "react"

import styled from "styled-components"
import {
  animated,
  useTransition,
  useSpring,
  useSprings,
  useChain,
  useTrail,
} from "react-spring"

import AboutImage from "./AboutImageParallax5"

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
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: -1;
`

const ImageTainr = styled(animated.div)`
  background: green;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -2;
  height: 100%;
  width: 100%;
`

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-size: 24px;
  font-weight: bold;
  line-height: 150%;
  color: #ffe9c9;
  text-align: center;
`

const Statements = ({ statements }) => {
  const [statementIndex, setStatementIndex] = useState(0)

  const statementSpringsRefs = statements.map(() => useRef())
  const statementsProps = useSprings(
    statements.length,
    statements.map((item, idx) => ({
      ref: statementSpringsRefs[idx],
      from: { opacity: 0 },
      to: { opacity: statementIndex === idx ? 1 : 0 },
    }))
  )

  const imageSpringsRefs = statements.map(() => useRef())
  const imageProps = useSprings(
    statements.length,
    statements.map((item, idx) => ({
      ref: imageSpringsRefs[idx],
      from: { opacity: 0 },
      to: { opacity: statementIndex === idx ? 1 : 0 },
    }))
  )

  //   const imageProps = useTransition()
  useChain([...statementSpringsRefs, ...imageSpringsRefs])

  return (
    <CarouselTainr>
      <CarouselContent>
        {statementsProps.map((props, idx) => (
          <StatementContent key={`statement-${idx}`} style={props}>
            <AH3>{statements[idx].heading}</AH3>
            <hr />
            <p>{statements[idx].content}</p>
          </StatementContent>
        ))}
        {imageProps.map((props, idx) => (
          <ImageTainr key={`image-${idx}`} style={props}>
            <AboutImage />
          </ImageTainr>
        ))}
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

// const StatementTainr = styled(animated.div)``

// for media queries
// const ImageTainr = styled(animated.div)`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   z-index: -1;
//   background: red;
// `

// const ContentTainr = styled(animated.div)``

export default () => {
  return <Statements className="statements" statements={StatementsArr} />
}
