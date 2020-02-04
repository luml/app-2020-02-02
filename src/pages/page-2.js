import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Feel you on Sundays</h1>
    <Link to="/">⇠Go back</Link>
  </Layout>
)

export default SecondPage
