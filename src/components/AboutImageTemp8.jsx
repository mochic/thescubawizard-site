import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

import devices from "../devices"

// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     50.92% 44.8% at 34.31% 51.18%,
//     rgba(25, 31, 29, 0.7) 0%,
//     #191f1d 100%
//   );
//   height: 667px;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// `

// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     140.92% 25.8% at 49.31% 34.18%,
//     rgba(25, 31, 29, 0.7) 0%,
//     #191f1d 100%
//   );
//   height: 667px;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// `

// our widget's min size is 700px
// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     38.45% 38.02% at 50.05% 49.94%,
//     rgba(25, 31, 29, 0.76) 0%,
//     #191f1d 100%
//   );
//   height: 700px;
//   width: 600px;
//   position: relative;
//   overflow: hidden;
// `

// min-width: 700px
// min-height: 800px or something...
const Gradient = styled(animated.div)`
  background: radial-gradient(
    38.45% 38.02% at 50.05% 49.94%,
    rgba(25, 31, 29, 0.76) 0%,
    #191f1d 100%
  );
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 1000px; /* height is the way...because height is the only fixed part of the element, width is for media queries */
`

// min-width, max-width might be bad due to absolute posited image that we would want to base off of

// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   max-width: 450px;
//   position: absolute;
//   top: 0px;
//   right: 0px;
// `

/* 
    The image container is bigger than the gradient and shoud 
    always above the gradient. Looks supert awful if the top
    edge of the image is visbile in the gradient so we want 
    to avoid this at all costs with this strategy...
*/
// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   min-height: 120%;
//   position: absolute;
//   top: -10%;
//   right: 0px;
// `
// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   position: absolute;
//   top: -30%; /* this can be crazy due to scaling of image */
//   left: 0px;
// `

// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   position: absolute;
//   top: -30%; /* this can be crazy due to scaling of image */
//   left: 0px;
// `

const Containr = styled(animated.div)`
  height: 100%;
  width: 100%;
`

// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(
//           relativePath: { eq: "diver-83508_1280-cropped-0.png" }
//         ) {
//           childImageSharp {
//             fluid(grayscale: true) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Img
//         imgStyle={{ objectPosition: "0% 0%" }}
//         style={{ minWidth: `600px`, maxWidth: `1095px` }}
//         // style={{ minWidth: `450px`, maxWidth: `1095px` }}
//         fluid={data.placeholderImage.childImageSharp.fluid}
//       />
//     )}
//   />
// )

const Image = ({ ...outerProps }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "diver-83508_1280-cropped-0.png" }
        ) {
          childImageSharp {
            fluid(grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          imgStyle={{ objectPosition: "0% 0%" }}
          style={{
            // minWidth: `600px`,
            // maxWidth: `1095px`,
            // zIndex: -1,
            // position: `absolute`,
            // top: `-30%`,
            // left: `0px`,
            height: `100%`,
            width: `100%`,
            boxShadow: `25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset`,
          }}
          // style={{ minWidth: `450px`, maxWidth: `1095px` }}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )
    }}
  />
)

// export default ({ imageTainrProps, containrProps }) => {
//   return (
//     <Containr {...containrProps}>
//       <Gradient>
//         <ImageTainr {...imageTainrProps}>
//           <Image />
//         </ImageTainr>
//       </Gradient>
//     </Containr>
//   )
// }

// easiest media queries
// const ImageTainr = styled(animated.div)`
//   min-width: 600px;
//   z-index: -1;
//   position: absolute;
//   top: -30%;
//   left: 0px;

//   @media ${devices.laptop} {
//     min-width: 1000px;
//   }
// `

const ImageTainr = styled(animated.div)`
  min-width: 600px;
  z-index: -1;
  position: absolute;
  top: -30%;
  left: 0px;
  width: 100%;
  @media ${devices.laptop} {
  }
`

export default ({ imageTainrProps, containrProps }) => {
  return (
    <Containr {...containrProps}>
      <Gradient>
        <ImageTainr>
          <Image outerProps={imageTainrProps} />
        </ImageTainr>
      </Gradient>
    </Containr>
  )
}
