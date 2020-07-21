import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout"
import H2 from "../components/h2"
import H3 from "../components/h3"
import SEO from "../components/seo"
import { ParagraphStyles } from "../components/paragraph"

const Songs = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Songs" />

      <H2>SONGS</H2>

      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <H3>{title}</H3>
              <PageBody>
                <MDXRenderer>{node.body}</MDXRenderer>
              </PageBody>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

const PageBody = styled.div`
  margin-bottom: 60px;

  p {
    ${ParagraphStyles}
  }
`

export default Songs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { contentType: { eq: "song" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          body
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
