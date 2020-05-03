import React, { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import H3 from "./h3"
import Paragraph from "./paragraph"
import Form from "./form"

const MailingList = props => {
  const [formStatus, setFormStatus] = useState("showForm")
  const [email, setEmail] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const data = await addToMailchimp(email)

    if (data.result === "success") {
      setFormStatus("showSuccess")
    } else if (
      data.result === "error" &&
      data.msg.indexOf("is already subscribed") > -1
    ) {
      setFormStatus("showAlreadySubscribed")
    } else {
      setFormStatus("showError")
    }
  }

  return (
    <div className={props.className}>
      <H3>MAILING LIST</H3>
      {formStatus === "showForm" && (
        <>
          <Paragraph>
            Get an occasional update if there's a new song or exciting news
          </Paragraph>

          <StyledForm onSubmit={handleSubmit}>
            <input
              placeholder="email address"
              type="text"
              name="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />

            <button type="submit">Join</button>
          </StyledForm>
        </>
      )}
      {formStatus === "showSuccess" && (
        <Paragraph>Thanks you've been added : )</Paragraph>
      )}

      {formStatus === "showAlreadySubscribed" && (
        <Paragraph>This address is already on the mailing list</Paragraph>
      )}

      {formStatus === "showError" && (
        <Paragraph>
          Sorry there was a problem adding that email address
        </Paragraph>
      )}
    </div>
  )
}

const StyledForm = styled(Form)`
  input {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 820px) {
    text-align: right;

    input {
      width: 100%;
      margin-right: 0;
    }
  }
`

export default MailingList
