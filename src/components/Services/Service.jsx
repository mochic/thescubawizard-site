import React from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import PropTypes from "prop-types"

import { H3, P } from "../Shared"

const IconTainr = styled(animated.div)`
  height: 100px;
  width: 100px;
  overflow: hidden;
  display: flex;
  background: #ffe9c9;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`

const Service = ({
  children,
  description,
  descriptionProps,
  iconProps,
  name,
  nameProps,
}) => {
  return (
    <>
      <IconTainr style={{ ...iconProps }}>{children}</IconTainr>
      <H3 style={{ textAlign: `center`, ...nameProps }}>{name}</H3>
      <P style={{ textAlign: `center`, ...descriptionProps }}>{description}</P>
    </>
  )
}

Service.propTypes = {
  children: PropTypes.element,
  description: PropTypes.string,
  descriptionProps: PropTypes.object,
  iconProps: PropTypes.object,
  name: PropTypes.string,
  nameProps: PropTypes.object,
}

export default Service
