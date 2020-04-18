/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <div sx={{ bg: "background" }}>
      <h1 sx={{ fontFamily: "heading" }}>Miss you always</h1>
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      <div style={{ display: `flex` }}>
        <p sx={{ fontFamily: "body", marginRight: "1rem" }}>
          Hey there, we don't really do much at here. So just bear with me if
          you can.
        </p>
        <Link to="/demo/" activeClassName="current-page">
          Try this Demo&rarr;
        </Link>
      </div>
      <div className="linearGradient" onClick={displayLinearGradient}></div>
      {/* move video into pages folder, can it has subtitles or captions*/}
      <video width="400" height="300" src="/video/0410.mp4" controls>
        {/* <track default kind="subtitles" srclang="en"></track> */}
        <track default kind="captions" srcLang="en"></track>A video filled with
        one second
      </video>
    </div>
    <Link to="/page-2/">Gonna⇢</Link>
  </Layout>
)

function displayLinearGradient() {
  document.querySelector(
    ".linearGradient"
  ).innerHTML = `This is made of linear-gradient`
}

export default IndexPage
