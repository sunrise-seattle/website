import Divider, { VerticalDivider } from "./Divider"
import React, { useContext } from "react"
import { StyleSheet, css } from "aphrodite"

import { MobileContext } from "../MobileContext"
import PropTypes from "prop-types"

const styles = StyleSheet.create({
  full: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  mobile: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  section: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingRight: "10px",
    paddingLeft: "10px",
    textAlign: "center",
  },
  sectionMobile: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  title: {
    fontSize: "1.5em",
  },
  unstyledLink: {
    textDecoration: "none",
  },
  iconContainer: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
  },
})

VerticalSection.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      title: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default function VerticalSection(props) {
  const isMobile = useContext(MobileContext)
  const { content } = props

  return (
    <div className={isMobile ? css(styles.mobile) : css(styles.full)}>
      {!!content &&
        content
          .map(entry => {
            const { icon, title, text, link } = entry
            return (
              <div
                className={
                  isMobile ? css(styles.sectionMobile) : css(styles.section)
                }
                key={title}
              >
                <a href={link} className={css(styles.unstyledLink)}>
                  {icon && (
                    <div className={css(styles.iconContainer)}>{icon}</div>
                  )}
                  <h3 className={css(styles.title)}>{title}</h3>
                  <p>{text}</p>
                </a>
              </div>
            )
          })
          .reduce((a, b) => (
            <>
              {a}
              {isMobile ? <Divider /> : <VerticalDivider />}
              {b}
            </>
          ))}
    </div>
  )
}
