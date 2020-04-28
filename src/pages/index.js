/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../components/custome.css"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <div className="heartWords"  sx={{ bg: "background" }}>
      <h1 sx={{ fontFamily: "heading" }}>Miss you always</h1>
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      <div style={{ display: `flex` }}>
        <p className="hey" sx={{ fontFamily: "body", marginRight: "1rem" }}>
          Hey there, we don't really do much at here. So just bear with me if
          you can.
        </p>
        <Link to="/demo/" activeClassName="current-page">
          Try this Demo&rarr;
        </Link>
      </div>
      <div className="linearGradient" onClick={displayLinearGradient}></div>
      {/* move video into pages folder, can it has subtitles or captions*/}
    </div>
    <Link to="/page-2/">Gonna⇢</Link>
  </Layout>
)

function displayLinearGradient() {
  // how many times you have visited click this div using localStorage
  let times = localStorage.getItem("clicked-div")
  if (times == null) {
    times = 0
  } else {
    times = parseInt(times)
  }
  times++
  localStorage.setItem("clicked-div", times.toString(10))

  let linearGradient = document.querySelector(".linearGradient")
  linearGradient.textContent = null
  const p = document.createElement("p")
  // There're two ways to make text node
  /**
   * 1, document.createTextNode(`This is made of linear-gradient`)
   * 2, p.innerText
   */
  p.innerText = `This is made of linear-gradient which has been clicked ${times} time(s)`
  linearGradient.appendChild(p)
}

export default IndexPage
