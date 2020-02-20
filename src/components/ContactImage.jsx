import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgStyle, style }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "140219-N-BJ254-058-3.png" }
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
          imgStyle={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            ...imgStyle,
          }}
          style={{
            overflow: `hidden`,
            position: `relative`,
            ...style,
          }}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )
    }}
  />
)

export default Image
