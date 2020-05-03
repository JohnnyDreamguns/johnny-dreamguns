import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import H3 from "./h3"
import Paragraph from "./paragraph"
import Form from "./form"

const MailingList = () => {
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
    <>
      <H3>MAILING LIST</H3>
      {formStatus === "showForm" && (
        <>
          <Paragraph>
            Get an occasional update if there's a new song or exciting news
          </Paragraph>

          <Form onSubmit={handleSubmit}>
            <input
              placeholder="email address"
              type="text"
              name="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />

            <button type="submit">Join</button>
          </Form>
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
    </>
  )
}

export default MailingList
