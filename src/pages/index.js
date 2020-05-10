import "../styles/styles.css"

import Divider from "../components/Divider"
import EmbeddedSection from "../components/EmbeddedSection"
import GoogleCalendar from "../components/GoogleCalendar"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TextSection from "../components/TextSection"
import { graphql } from "gatsby"

export default function Home() {
  const content = (
    <div className="body">
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
    </div>
  )
  return (
    <Layout
      location="Home"
      title={"Sunrise Movement Seattle"}
      heading={"Welcome to Sunrise Seattle!"}
      content={content}
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
