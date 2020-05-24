import { StyleSheet, css } from "aphrodite"

import PropTypes from "prop-types"
import React from "react"

CaptionedImage.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
}

export default function CaptionedImage(props) {
  return (
    <div className={props.className}>
      <div className={css(styles.section)}>
        <img
          className={css(styles.image)}
          src={props.image}
          alt={props.caption}
        />
        <div className={css(styles.caption)}>{props.caption}</div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "cover",
  },
  caption: {
    fontFamily: "Source Code Pro",
    color: "white",
  },
})
