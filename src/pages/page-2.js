/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 sx={{ color: "primary", fontFamily: "heading" }}>
      Feel you on Sundays
    </h1>
    <div>
      <p sx={{ fontFamily: "body" }}>
        No matter how hard the time is for you, it's always nice to take a bit
        of time when you want to take a moment and think of someone. Don't
        forget we love being missed.
      </p>
    </div>
    <Link to="/">⇠Go back</Link>
  </Layout>
)

export default SecondPage
