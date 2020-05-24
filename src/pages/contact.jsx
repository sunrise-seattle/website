import "../styles/styles.css"

import { StyleSheet, css } from "aphrodite"
import { faDollarSign, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import CircleLogo from "../../content/assets/Sunrise_Circle_Grey.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import VerticalSection from "../components/VerticalSection"
import { graphql } from "gatsby"
import headerImage from "../../content/assets/banners/SunriseSeattle-StrategyRetreat-January.jpg"

const styles = StyleSheet.create({
  circle: {
    width: "88px",
    height: "88px",
    background: "var(--sunrise-yellow)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "58px",
    height: "58px",
    color: "var(--sunrise-dark)",
  },
  body: {
    paddingTop: "100px",
    paddingBottom: "100px",
  },
})

export default function Contact() {
  const emailSectionContent = {
    title: "EMAIL",
    icon: (
      <div className={css(styles.circle)}>
        <FontAwesomeIcon icon={faEnvelope} className={css(styles.icon)} />
      </div>
    ),
    text:
      "For questions, comments, press inquiries, or to get in touch about workshops or presentations, please send us an email.",
  }

  const donateSectionContent = {
    title: "DONATE",
    icon: (
      <div className={css(styles.circle)}>
        <FontAwesomeIcon icon={faDollarSign} className={css(styles.icon)} />
      </div>
    ),
    text:
      "If you’d like to financially support our hub, please consider donating to our ActBlue.",
  }

  const nationalSectionContent = {
    title: "SUNRISE NATIONAL",
    icon: (
      <div className={css(styles.circle)}>
        <img
          className={css(styles.icon)}
          src={CircleLogo}
          alt="Sunrise Movement logo"
        />
      </div>
    ),
    text:
      "To learn more about the Sunrise Movement, you can find more information on the Sunrise website.",
  }

  const content = (
    <div className={css(styles.body)}>
      <VerticalSection
        content={[
          emailSectionContent,
          donateSectionContent,
          nationalSectionContent,
        ]}
      />
    </div>
  )
  return (
    <Layout
      location="Contact"
      title={"Contact Us"}
      heading={"GET IN TOUCH"}
      content={content}
      headerImage={headerImage}
    >
      <SEO
        title="Contact Us"
        description="Get in touch with Sunrise Movement Seattle"
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
