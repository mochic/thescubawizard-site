import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1
      style={{
        textAlign: `center`,
        fontFamily: `playfair display`,
        color: `#ffe9c9`,
      }}
    >
      NOT FOUND
    </h1>
    <p style={{ textAlign: `center`, fontFamily: `open sans`, color: `white` }}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
  </div>
)

export default NotFoundPage
