import "../styles/styles.css"

import { StyleSheet, css } from "aphrodite"

import Divider from "../components/Divider"
import EmbeddedSection from "../components/EmbeddedSection"
import GoogleCalendar from "../components/GoogleCalendar"
import Layout from "../components/layout"
import LinkedButton from "../components/LinkedButton"
import React from "react"
import SEO from "../components/seo"
import TextSection from "../components/TextSection"
import { graphql } from "gatsby"
import headerImage from "../../content/assets/banners/SunriseSeattle-AugustTraining-Group.jpg"

const styles = StyleSheet.create({
  aboutButton: {
    width: "200px !important",
  },
})

export default function Home() {
  const content = (
    <>
      <TextSection
        heading="What's Sunrise?"
        body="The Sunrise Movement is a national, youth-led movement that aims to
        stop the climate crisis, create millions of good jobs, and take action
        against the systems of oppression at the root of the climate crisis.
        We are ordinary young people who are scared about what the climate
        crisis means for the people and places we love. Together, we will
        change this country and this world, sure as the sun rises each
        morning."
      />

      <Divider />

      <EmbeddedSection
        heading="Upcoming Events"
        body=" We rely on the participation of our members to succeed. When
      everybody actively plugs in and gives what they can (whether you can
      give 5 minutes a week or 40 hours), our movement thrives! To get
      plugged in, join us at one of our upcoming events we have planned."
        textSide={"right"}
      >
        <GoogleCalendar url="https://calendar.google.com/calendar/embed?src=d4a11ua9ap43jtl6h0rhngsf8s%40group.calendar.google.com&ctz=America%2FLos_Angeles" />
      </EmbeddedSection>
    </>
  )

  // TODO: link to about page instead
  const aboutUsButton = (
    <LinkedButton
      link={"/contact"}
      text="ABOUT US"
      className={css(styles.aboutButton)}
    />
  )
  return (
    <Layout
      location="Home"
      title={"Sunrise Movement Seattle"}
      heading={"WELCOME TO SUNRISE SEATTLE!"}
      content={content}
      headerButtons={[aboutUsButton]}
      headerImage={headerImage}
    >
      <SEO
        title="Home"
        description="Homepage of Sunrise Movement Seattle website"
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
