import React, { useContext } from "react"
import { StyleSheet, css } from "aphrodite"

import { MobileContext } from "../MobileContext"
import PropTypes from "prop-types"

TextSection.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
}

export default function TextSection(props) {
  const isMobile = useContext(MobileContext)
  const { heading, body } = props

  return (
    <div className={isMobile ? css(styles.mobileSection) : css(styles.section)}>
      <h2>{heading}</h2>
      <p className={css(styles.sectionText)}>{body}</p>
    </div>
  )
}

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "row",
  },
  mobileSection: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  sectionText: {
    margin: "30px",
  },
})
