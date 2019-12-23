import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, useTransition, useChain, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import AboutImage from "./AboutImage"

import devices from "../devices"

// import { AHr } from "./Shared"

import VisibilitySensor from "react-visibility-sensor"

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-size: 26px;
  font-weight: bold;
  color: #ffe9c9;
  line-height: 150%;
  text-align: center;
`

const AP = styled(animated.p)`
  font-family: open sans;
  font-size: 18px;
  font-weight: 600;
  color: white;
  line-height: 200%;
`

// const MainTainr = styled.div`
//   position: relative; /* very important for absolute positioned image */
//   min-height: 700px;
//   display: grid;
//   grid-template-areas:
//     ". . . "
//     ". content ."
//     ". . .";
//   grid-template-rows: auto auto auto;
//   grid-template-columns: auto 250px auto;

//   @media ${devices.laptop} {
//     grid-template-rows: auto 250px 100px;
//     grid-template-columns: auto 800px auto;
//   }
// `

// const MainTainr = styled.div`
//   position: relative; /* very important for absolute positioned image */
//   min-height: 700px;
//   display: grid;
//   grid-template-areas:
//     ". . . "
//     ". content ."
//     ". . .";
//   grid-template-rows: auto auto auto;
//   grid-template-columns: auto 250px auto;

//   @media ${devices.laptop} {
//     grid-template-rows: auto auto 8%;
//     grid-template-columns: 8% minmax(auto, 800px) minmax(8%, auto);
//   }
// `

const MainTainr = styled.div`
  display: grid;
  position: relative; /* very important for absolute positioned image */
  height: 900px;
  grid-template-areas:
    ". . . "
    ". content ."
    ". . .";
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 250px auto;
  @media ${devices.laptop} {
    grid-template-rows: auto auto 150px;
    grid-template-columns: 8% minmax(auto, 900px) minmax(8%, auto);
  }
`

// we use absolute position because it works really well here
// const ContentTainr = styled.div`
//   grid-area: content;
//   padding: 50px 0 0 0;
//   margin: auto;
//   width: 250px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media ${devices.tablet} {
//     flex-direction: row;
//   }
// `

// const ContentTainr = styled.div`
//   grid-area: content;
//   padding: 0;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: none;

//   @media ${devices.laptop} {
//     flex-direction: row;
//     padding: 0 10px 0 10px;
//   }
// `

const ContentTainr = styled(animated.div)`
  grid-area: content;
  padding: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;

  @media ${devices.laptop} {
    flex-direction: row;
    padding: 0 10px 0 10px;
  }
`

// const AH2 = styled(animated.h2)`
//   font-family: playfair display;
//   font-weight: bold;
//   font-size: 260px;
//   margin: 0;
//   padding: 0;
//   color: rgba(255, 255, 255, 0.5);
//   mix-blend-mode: overlay;

//   @media ${devices.laptop} {
//     font-size: 260px;
//   }
// `

// make chunks go in different directions as u scroll?
const AH2 = styled(animated.h2)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 260px;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: overlay;
  min-width: 300px;
  word-break: break-word;

  @media ${devices.laptop} {
    font-size: 260px;
  }
`

// we needs teh queries!
const AHr = styled(animated.hr)`
  width: 40%;
  border: 0.5px solid #ffe9c9;
  margin: 0 0 16px 0;

  @media ${devices.laptop} {
    height: 300px;
    width: 0.5px;
    display: inline-block;
    margin: auto 50px auto 50px;
  }
`

// const ImageTainr = styled(animated.div)`
//   min-height: 850px;
//   z-index: -1;
//   width: 100%;
//   height: 100%;
//   top: 0px;
//   left: -100px; /* add padding after a certain media query breakpoint */
//   position: absolute;
// `

// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   height: 700px;
//   width: 100%;
//   position: absolute;
//   top: 0px;
//   left: 35%; /* add padding after a certain media query breakpoint */
//   display: grid;
//   grid-template-areas: ". image .";
//   grid-template-columns: auto 3fr 1fr;
// `

// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   height: 700px;
//   width: 100%;
//   position: absolute;
//   top: 0px;
//   left: 35%; /* add padding after a certain media query breakpoint */
//   display: grid;
//   grid-template-areas: ". image .";
//   grid-template-columns: 1fr 1fr 1fr;
//   min-width: 2000px;
// `

// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   height: 700px;
//   width: 100%;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   display: grid;
//   grid-template-areas: ". image .";
//   grid-template-columns: auto 700px minmax(auto, 25px);
//   background: red;
// `

// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   height: 700px;
//   width: 100%;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   display: grid;
//   grid-template-areas: ". image .";
//   grid-template-columns: auto 400px 100px;

//   @media ${devices.tablet} {
//     grid-template-columns: auto 600px 100px;
//   }

//   @media ${devices.laptop} {
//     grid-template-columns: auto 800px 100px;
//   }
// `

const ImageTainr = styled(animated.div)`
  z-index: -1;
  height: 900px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;

  @media ${devices.tablet} {
  }

  @media ${devices.laptop} {
  }
`

// think about the images as modals moving along an axis

const OuterDiv = styled(animated.div)`
  grid-area: image;
  margin: -1px;
  background: red;
  overflow: hidden;
  width: 100%;
  height: 898px;
`

export default ({ contentTainrProps, headerProps }) => {
  //   const [revealed, setRevealed] = useState(false)

  const [revealProps, setRevealProps] = useSpring(() => ({
    imageOpacity: 0,
  }))

  // const atLeastTablet = window.matchMedia(devices.tablet)
  // console.log(
  //   "%cAboutSection media query: ",
  //   "color: seagreen",
  //   devices.tablet,
  //   atLeastTablet
  // )

  const { style: headerStyle, ...headerPropsRest } = headerProps || {} // hacky default value

  console.log("%cAbout Section rendered!", "color: red")

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 500 }}
      onChange={v => {
        console.log("about vis changed!", v)
        if (v) {
          setRevealProps({
            imageOpacity: 1,
          })
        } else {
          setRevealProps({ imageOpacity: 0.3 })
        }
      }}
    >
      <MainTainr>
        <AH2
          style={{
            position: `absolute`,
            top: `5px`,
            left: `41px`,
            ...headerStyle,
          }}
          {...headerPropsRest}
        >
          about
        </AH2>
        <ContentTainr style={contentTainrProps}>
          <AH3>Not your everyday dive service.</AH3>
          <AHr />
          <AP
            style={{
              textAlign: `center`,
              fontFamily: `open sans`,
              fontSize: `16px`,
              fontWeight: 300,
            }}
          >
            We’re dedicated to delivering a quality dive service to the Pacific
            Northwest area. With us you wont have to worry about stuff? You
            shouldnt need to take time out of your busy work schedule.
          </AP>
        </ContentTainr>
        <ImageTainr>
          <AboutImage
            containrProps={{
              style: {
                gridArea: `image`,
                // overflow: `hidden`, // no ideas why...it just screws up everything if an accidental zoom occurs
                margin: `-1px`,
              },
            }}
            imageTainrProps={{
              style: {
                opacity: revealProps.imageOpacity,
                // transform: `translate3d(-${scrollDrift}px, 0, 0)`,
              },
            }}
          />
        </ImageTainr>
        {/* <ImageTainr>
          <AboutImage
            imageTainrProps={{
              style: {
                // opacity: scrollPos * 0.08,
                transform: `translate3d(${scrollPos * 0.05}px, 0, 0)`,
              },
            }}
          />
        </ImageTainr> */}
        {/* <div
          style={{
            position: `absolute`,
            left: `10%`,
            top: `100px`,
            zIndex: -1,
            opacity: revealProps.h2Opacity,
            transform: `translate3d(0,${scrollPos * 0.4}px,0)`,
            width: `100%`,
          }}
        >
          <AH2
            style={{
              transform: `rotate(-90deg)`,
              opacity: revealProps.h2Opacity,
            }}
          >
            about
          </AH2>
        </div> */}
      </MainTainr>
    </VisibilitySensor>
  )
}
