import React, { useContext } from "react"
import { StyleSheet, css } from "aphrodite"

import { MobileContext } from "../MobileContext"
import PropTypes from "prop-types"

EmbeddedSection.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  textSide: PropTypes.oneOf(["left", "right"]),
}

export default function EmbeddedSection(props) {
  const isMobile = useContext(MobileContext)
  const { heading, body, textSide } = props

  return (
    <div
      className={isMobile ? css(styles.embeddedMobile) : css(styles.embedded)}
    >
      {(!textSide || textSide === "right") && !isMobile && props.children}
      <div
        className={isMobile ? css(styles.mobileSection) : css(styles.section)}
      >
        <h2>{heading}</h2>
        <p className={css(styles.sectionText)}>{body}</p>
      </div>
      {(isMobile || textSide === "left") && props.children}
    </div>
  )
}

const styles = StyleSheet.create({
  embedded: {
    display: "flex",
    flexDirection: "row",
  },
  embeddedMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
  },
  mobileSection: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
})
