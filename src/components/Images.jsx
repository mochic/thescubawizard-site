import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ query, imgStyle, style }) => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          style={{
            overflow: `hidden`,
            position: `relative`,
            ...style,
          }}
          imgStyle={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            ...imgStyle,
          }}
        />
      )
    }}
  />
)

export const SchedulingImage = props => (
  <Image
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "140219-N-BJ254-058-test-17.png" }
        ) {
          childImageSharp {
            fluid(grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    {...props}
  />
)
