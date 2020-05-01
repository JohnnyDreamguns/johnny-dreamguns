import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import H2 from "../components/h2"
import H3 from "../components/h3"

const calculateH2 = post =>
  post.frontmatter.contentType === "news" ? "NEWS" : "SONGS"

const Article = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout
      location={props.location}
      contentType={post.frontmatter.contentType}
      title={siteTitle}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <H2>{calculateH2(post)}</H2>
      <H3>
        {post.frontmatter.contentType === "news" && post.frontmatter.date}
        {post.frontmatter.contentType === "news" && " - "}
        {post.frontmatter.title}
      </H3>

      <PageBody>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PageBody>
    </Layout>
  )
}

const PageBody = styled.div`
  p {
    font-family: "Roboto slab", "sans-serif";
    font-size: 20px;
    line-height: 30px;
    color: #616161;
    max-width: 700px;
  }
`

export default Article

export const pageQuery = graphql`
  query ArticlesBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "DD/MM/YY")
        description
        contentType
      }
    }
  }
`
