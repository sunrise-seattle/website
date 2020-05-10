import React, { useContext, useEffect, useState } from "react"

import { MobileContext } from "../MobileContext"
import PropTypes from "prop-types"
import { getScreenWidth } from "../util"

GoogleCalendar.propTypes = {
  url: PropTypes.string,
}

export default function GoogleCalendar(props) {
  const isMobile = useContext(MobileContext)
  const [screenWidth, setScreenWidth] = useState(getScreenWidth())

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getScreenWidth())
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
    }
  })

  const { url } = props

  return (
    <div className="calendar">
      <iframe
        src={url}
        width={isMobile ? screenWidth - 40 : "550"}
        height="480"
        frameBorder="0"
        scrolling="no"
        title="calendar"
      ></iframe>
    </div>
  )
}
