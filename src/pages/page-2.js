import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Feel you on Sundays</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">⇠Go back</Link>
  </Layout>
)

export default SecondPage
