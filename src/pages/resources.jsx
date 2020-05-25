import "../styles/styles.css"

import React, { useEffect, useState } from "react"
import { StyleSheet, css } from "aphrodite"

import Divider from "../components/Divider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VerticalSection from "../components/VerticalSection"
import { graphql } from "gatsby"
import headerImage from "../../content/assets/banners/SunriseSeattle-BernieCanvass.jpg"
import { isMobile as isMobileFunc } from "../util"

const styles = StyleSheet.create({
  blockText: {
    padding: "100px",
  },
  mobileBody: {
    padding: "20px",
  },
  body: {},
})

export default function Resources() {
  const [mobile, setMobile] = useState(isMobileFunc())
  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobileFunc())
    }

    window.addEventListener("resize", handleResize)
  })
  const isMobile = mobile

  const resources = [
    {
      title: "YOUR GUIDE TO SUNRISE SEATTLE",
      text:
        "In this guide, learn how to connect with others in our group, about our work, our structure, how to start a project, how to discover your role, and more! View the document here.",
      link:
        "https://docs.google.com/document/d/15voVqeHr_fNGtm1utzFX3geASQGS5rTGPr_6C4zzVt4/",
    },
    {
      title: "GOOGLE DRIVE",
      text:
        "We use a Google Drive folder to store resources, meeting notes, and more. Please contact a team lead for access.",
    },
    {
      title: "SLACK",
      text:
        "We use Slack, an online messaging tool, to share ideas, collaborate, and make decisions. Send us an email for the sign-up link.",
    },
  ]

  const verticalSections = []
  for (let i = 0; i < resources.length; i += 3) {
    if (i + 2 < resources.length) {
      verticalSections.push(
        <VerticalSection
          content={[resources[i], resources[i + 1], resources[i + 2]]}
        />
      )
    } else if (i + 1 < resources.length) {
      verticalSections.push(
        <VerticalSection content={[resources[i], resources[i + 1]]} />
      )
    } else {
      verticalSections.push(<VerticalSection content={[resources[i]]} />)
    }
  }

  const content = (
    <div className={isMobile ? css(styles.mobileBody) : css(styles.body)}>
      <div className={!isMobile ? css(styles.blockText) : ""}>
        <p>
          Here you’ll find some of the key resources for all of our hub members.
          Please note that these documents and resources are constantly under
          revision, so please let us know if you have any feedback or changes.
        </p>
      </div>
      {verticalSections.reduce((a, b) => (
        <>
          {a} <Divider /> {b}
        </>
      ))}
    </div>
  )
  return (
    <Layout
      location="Resources"
      title={"Resources"}
      heading={"RESOURCES"}
      content={content}
      headerImage={headerImage}
    >
      <SEO
        title="Resources"
        description="Resources for Sunrise Movement Seattle members"
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
