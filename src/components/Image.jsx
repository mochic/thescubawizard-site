import React from "react"
import { StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ query, imgStyle, style }) => (
  <StaticQuery
    query={query}
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
