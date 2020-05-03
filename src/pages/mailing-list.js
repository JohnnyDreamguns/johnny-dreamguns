import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MailingList from "../components/mailing-list"

const MailingListPage = props => (
  <Layout location={props.location} title="Mailing List">
    <SEO title="Join the Mailing List" />
    <StyledMailingList />
  </Layout>
)

const StyledMailingList = styled(MailingList)`
  p {
    margin-bottom: 15px;
  }

  form {
    @media (min-width: 820px) {
      text-align: left;
    }

    input {
      width: initial;
      min-width: 300px;
      margin-right: 20px;
    }
  }
`

export default MailingListPage
