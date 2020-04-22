import React from "react"
import { graphql } from "gatsby"

import "../styles/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import yellowLogo from "../../content/assets/yellow-logo.png"

const home = ({ location }) => {
  const content = (
    <div className="body">
      <h1>WELCOME TO SUNRISE SEATTLE!</h1>
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

      <div className="section-embedded">
        <div className="calendar">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=d4a11ua9ap43jtl6h0rhngsf8s%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            width="600"
            height="480"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="section-vertical">
          <h2>Upcoming Events</h2>
          <p>
            We rely on the participation of our members to succeed. When
            everybody actively plugs in and gives what they can (whether you can
            give 5 minutes a week or 40 hours), our movement thrives! To get
            plugged in, join us at one of our upcoming events we have planned.
          </p>
        </div>
      </div>
    </div>
  )
  return (
    <Layout
      location={location}
      title={"Sunrise Movement Seattle"}
      content={content}
    >
      <SEO title="Home" />
    </Layout>
  )
}

export default home

//TODO: Just leave this blog support here for now for the future?
/* const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex*/

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

/* TODO: can add this to query above under site
allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
*/
