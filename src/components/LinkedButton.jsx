import React from "react"
import PropTypes from "prop-types"

LinkedButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
}

export default function LinkedButton(props) {
  return (
    <a className="linked-button" href={props.link}>
      {props.text}
    </a>
  )
}
