import { StyleSheet, css } from "aphrodite"

import PropTypes from "prop-types"
import React from "react"

LinkedButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
}

export default function LinkedButton(props) {
  return (
    <a
      className={`${css(styles.linkedButton)} ${props.className}`}
      href={props.link}
    >
      {props.text}
    </a>
  )
}

const styles = StyleSheet.create({
  linkedButton: {
    color: "white",
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "21px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    border: "3px solid #ffffff",
    boxSizing: "border-box",
    borderRadius: "6px",
    padding: "10px",
    width: "fit-content",
    display: "flex",
  },
})
