/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div sx={{ bg: "background" }}>
      <h1 sx={{ color: "primary" }}>Miss you always</h1>
      <Link to="/demo/" activeClassName="current-page">
        Try this Demo&rarr;
      </Link>
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
    <Link to="/page-2/">Gonna⇢</Link>
  </Layout>
)

export default IndexPage
