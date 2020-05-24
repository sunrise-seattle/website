import "../styles/styles.css"

import React, { useEffect, useState } from "react"
import { StyleSheet, css } from "aphrodite"

import Divider from "../components/Divider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VerticalSection from "../components/VerticalSection"
import { graphql } from "gatsby"
import headerImage from "../../content/assets/banners/SunriseSeattle-HubMeeting-January.jpg"
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

export default function Teams() {
  const [mobile, setMobile] = useState(isMobileFunc())
  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobileFunc())
    }

    window.addEventListener("resize", handleResize)
  })
  const isMobile = mobile

  const teams = [
    {
      title: "ACTIONS & POLITICS",
      text:
        "Organizes escalated direct actions, plans creative actions, and coordinates with elected allies and build support for candidates.",
    },
    {
      title: "COMMUNICATIONS",
      text:
        "Tells the story of Sunrise and the Green New Deal to the public by writing letters to news editors and press releases about Sunrise Seattle’s work.",
    },
    {
      title: "COMMUNITY BUILDING",
      text:
        "Brainstorms ways to ensure people’s health and happiness within the Sunrise community through relational activities and social events.",
    },
    {
      title: "EMAIL BLAST",
      text:
        "Crafts compelling emails to inform hub members of upcoming events, important asks, and Sunrise updates.",
    },
    {
      title: "JUSTICE & EQUITY",
      text:
        "Works with teams to center justice, equity, and anti-oppression within their activities and train members in centering our collective work around anti-oppression.",
    },
    {
      title: "OUTREACH",
      text:
        "Gives presentations about Sunrise and the Green New Deal in schools and workplaces, and spread the word about Sunrise to the greater community.",
    },
    {
      title: "PARTNERSHIPS",
      text:
        "Builds relationships with other organizations and learn about their work to further our shared goals.",
    },
    {
      title: "SOCIAL MEDIA",
      text:
        "Helps share updates about Sunrise Seattle and opportunities to take action on Instagram, Facebook, and Twitter.",
    },
    {
      title: "TRAININGS",
      text:
        "Organizes trainings to share our stories with vulnerability, visualize the role we have in Sunrise’s strategy, and learn advocacy skills.",
    },
    {
      title: "WELCOME",
      text:
        "Helps new hub members find their place in the movement and facilitate introductory 1-on-1’s for new members to get involved.",
    },
    {
      title: "YOUTH",
      text:
        "Works to connect elementary, middle, and high schoolers in the Seattle area to plan collective actions and events. Centers the voices and experiences of hub members who are under 18.",
    },
    {
      title: "WANT TO START A TEAM?",
      text:
        "If you’re interested in phone-banking, helping with our email inbox, or anything else, please send us an email!",
    },
  ]

  const verticalSections = []
  for (let i = 0; i < teams.length; i += 3) {
    if (i + 2 < teams.length) {
      verticalSections.push(
        <VerticalSection content={[teams[i], teams[i + 1], teams[i + 2]]} />
      )
    } else if (i + 1 < teams.length) {
      verticalSections.push(
        <VerticalSection content={[teams[i], teams[i + 1]]} />
      )
    } else {
      verticalSections.push(<VerticalSection content={[teams[i]]} />)
    }
  }

  const content = (
    <div className={isMobile ? css(styles.mobileBody) : css(styles.body)}>
      <div className={!isMobile ? css(styles.blockText) : ""}>
        <p>
          Sunrise Seattle is made up of teams that do the work of the hub. We
          use the snowflake model of leadership, which involves a group of team
          leads who support their team members to participate in Sunrise and
          become leaders.
        </p>
        <p>
          <strong>If you’re interested in joining a team</strong>, send a direct
          message to the team lead on Slack or send us an email, and a team lead
          will be in touch soon to get you plugged in! You’re welcome to sign up
          to participate in as many teams as you are interested and able! If
          you’re interested in leading (or helping to lead) a team, please reach
          out.
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
      location="Our Teams"
      title={"Our Teams"}
      heading={"OUR TEAMS"}
      content={content}
      headerImage={headerImage}
    >
      <SEO
        title="Our Teams"
        description="The teams that make up Sunrise Movement Seattle"
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
