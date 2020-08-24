import "../styles/styles.css"

import React, { useEffect, useState } from "react"
import { StyleSheet, css } from "aphrodite"

import CaptionedImage from "../components/CaptionedImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextSection from "../components/TextSection"
import VerticalSection from "../components/VerticalSection"
import bannerImage from "../../content/assets/photos/SunriseSeattle-Action-December.jpg"
import { graphql } from "gatsby"
import headerImage from "../../content/assets/banners/SunriseSeattle-FridaysforFuture-ValentinesDay.jpg"
import { isMobile as isMobileFunc } from "../util"
import logo from "../../content/assets/yellow-logo.png"
import trainingImage from "../../content/assets/photos/SunriseSeattle-AugustTraining-Group2-min.jpg"

const styles = StyleSheet.create({
  images: {
    display: "flex",
    flexDirection: "row",
  },
  imagesMobile: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    padding: "20px",
  },
  body: {
    paddingTop: "50px",
    paddingBottom: "50px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    height: "400px",
    width: "auto",
  },
  aboutSection: {
    display: "flex",
    flexDirection: "row",
  },
})

export default function About() {
  const [mobile, setMobile] = useState(isMobileFunc())
  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobileFunc())
    }

    window.addEventListener("resize", handleResize)
  })
  const isMobile = mobile

  const about = (
    <div className={css(styles.aboutSection)}>
      <div>
        <p>
          The Sunrise Seattle hub was formed in January 2018, and working
          alongside our partners, our sit-ins and events helped to put the Green
          New Deal on the national agenda, and now we’re working to build a
          movement large enough to start a Green New Deal at the beginning of
          the next presidency.
        </p>
        <p>
          So far, our hub has organized town hall events, made classroom
          presentations to over 1,500 students, hosted a statewide Sunrise
          training, and organized actions at our members of Congress’ offices to
          ask them to sign on to the Green New Deal, successfully helping
          convince Reps. Jayapal and Smith to sign on their support.
        </p>
      </div>
      {!isMobile && (
        <img className={css(styles.logo)} src={logo} alt="Sunrise logo" />
      )}
    </div>
  )

  const organize = {
    title: "ORGANIZE",
    text:
      "Convince Senators Cantwell and Murray to sign on to the federal Green New Deal resolution by the November election.",
  }

  const vote = {
    title: "VOTE",
    text:
      "Get out the youth vote for Bernie Sanders and other Green New Deal champions in the primary and general elections.",
  }

  const strike = {
    title: "STRIKE",
    text:
      "Elevate the urgency of climate change and the Green New Deal with 5 youth-led, escalated actions.",
  }

  const content = (
    <div className={css(styles.body)}>
      {about}
      <div className={isMobile ? css(styles.imagesMobile) : css(styles.images)}>
        <CaptionedImage
          className={css(styles.image)}
          image={bannerImage}
          caption="Five of our hub members holding a banner that reads “We Need You To Be Brave” at our December 2019 action demanding Senators Cantwell and Murray to support the Green New Deal."
        />
        <CaptionedImage
          className={css(styles.image)}
          image={trainingImage}
          caption="A group of over 30 Sunrisers from across Washington and the West Coast joined us in Seattle for a weekend training in August 2019."
        />
      </div>
      <TextSection
        heading="Our 2020 Goals"
        body="Sunrise Seattle works to help win a federal Green New Deal and a city Green New Deal by building our generation’s power. We’ve organized our goals under the “Organize. Vote. Strike.” strategy set forth by Sunrise national."
      />
      <VerticalSection content={[organize, vote, strike]} />
    </div>
  )
  return (
    <Layout
      location="About"
      title={"About Us"}
      heading={"WHAT WE DO"}
      content={content}
      headerImage={headerImage}
    >
      <SEO
        title="About Us"
        description="Learn about what we do at Sunrise Movement Seattle"
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
