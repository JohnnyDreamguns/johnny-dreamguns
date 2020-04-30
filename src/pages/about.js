import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import H2 from "../components/h2"
import Paragraph from "../components/paragraph"
import Anchor from "../components/anchor"

const About = props => (
  <Layout location={props.location} title="About">
    <SEO title="All posts" />

    <div>
      <H2>ABOUT</H2>

      <Paragraph>
        After many years of dedicated service to{" "}
        <Anchor href="https://www.theplaguedoctors.com">
          The Plague Doctors
        </Anchor>
        , Johnny Dreamguns has set off on his own musical adventure.
      </Paragraph>

      <Paragraph>
        Operating from a subterranean base in Manchester dubbed the Kastle
        Inkredible, he brings you his own unique low budget brand of synth rock.
      </Paragraph>

      <Paragraph>
        For the moment all new material will be uploaded to this website as live
        performance videos, once there is enough stuff the songs will likely be
        available as a new album, stay tuned!
      </Paragraph>
    </div>
  </Layout>
)

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { contentType: { eq: "news" } } }
    ) {
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
  }
`
