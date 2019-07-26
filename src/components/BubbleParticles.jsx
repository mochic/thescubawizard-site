import React from "react"

import Particles from "react-particles-js"

export default ({ height, width }) => {
  return (
    <Particles
      height={height}
      width={width}
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: false,
            },
          },
          size: {
            value: 6,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          color: {
            value: [`#27a77d`, `#1eff61`, `#222826`, `#ffffff`],
            random: true,
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 0.6,
            direction: "top",
            out_mode: "out",
          },
        },
      }}
    />
  )
}
