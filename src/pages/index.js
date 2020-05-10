import "../styles/styles.css"

import React, { useEffect, useState } from "react"
import { getScreenWidth, isNarrowWidth } from "../util"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth())

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getScreenWidth())
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
    }
  })

  const calendar = (
    <div className="calendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=d4a11ua9ap43jtl6h0rhngsf8s%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        width={isNarrowWidth() ? screenWidth - 40 : "550"}
        height="480"
        frameBorder="0"
        scrolling="no"
        title="calendar"
      ></iframe>
    </div>
  )

  const content = (
    <div className="body">
      <div className="section">
        <h2>What's Sunrise?</h2>
        <p className="section-text">
          The Sunrise Movement is a national, youth-led movement that aims to
          stop the climate crisis, create millions of good jobs, and take action
          against the systems of oppression at the root of the climate crisis.
          We are ordinary young people who are scared about what the climate
          crisis means for the people and places we love. Together, we will
          change this country and this world, sure as the sun rises each
          morning.
        </p>
      </div>

      <div className="divider" />

      <div className="section-embedded">
        {!isNarrowWidth() && calendar}
        <div className="section-vertical">
          <h2>Upcoming Events</h2>
          <p>
            We rely on the participation of our members to succeed. When
            everybody actively plugs in and gives what they can (whether you can
            give 5 minutes a week or 40 hours), our movement thrives! To get
            plugged in, join us at one of our upcoming events we have planned.
          </p>
        </div>
        {isNarrowWidth() && calendar}
      </div>
    </div>
  )
  return (
    <Layout
      location="Home"
      title={"Sunrise Movement Seattle"}
      heading={"WELCOME TO SUNRISE SEATTLE!"}
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
