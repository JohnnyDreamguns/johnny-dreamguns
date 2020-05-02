import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import H2 from "../components/h2"
import H3 from "../components/h3"
import Paragraph from "../components/paragraph"
import Anchor from "../components/anchor"

const Shop = props => (
  <Layout location={props.location} title="Shop">
    <SEO title="Shop" />

    <div>
      <H2>SHOP</H2>

      <H3>On the Moon</H3>
      <img src="https://theplaguedoctors.com/images/OnTheMoon-Medium.png" />
      <Paragraph>
        There's no Johnny Dreamguns albums yet, but in the meantime please check
        out{" "}
        <Anchor href="https://www.theplaguedoctors.com">
          The Plague Doctors
        </Anchor>
        , the band that spawned him
      </Paragraph>

      <Paragraph>
        On The Moon was released in 2014 and contains all their synth rock hits
      </Paragraph>

      <Paragraph>
        Usually available to buy here on vinyl but not currently posting due to
        the pandemic
      </Paragraph>

      <Paragraph>
        Instead it is available on:
        <br />
        <Anchor href="https://open.spotify.com/artist/0VPCCjydcsV6sGLqePzESH?si=g4CaG3VlT_e_3WAdsv5w9A">
          Spotify
        </Anchor>
        <br />
        <Anchor href="https://music.apple.com/gb/album/on-the-moon/969789879">
          iTunes
        </Anchor>
      </Paragraph>
    </div>
  </Layout>
)

export default Shop
