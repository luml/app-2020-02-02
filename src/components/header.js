/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import DarkModeToggle from "./toggleMode"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: "primary",
      display: `flex`,
      justifyContent: `space-between`,
      mb: `1.45rem`,
    }}
  >
    <div
      sx={{
        maxWidth: 960,
        p: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: `black`,
            textDecoration: `none`,
            fontStyle: `italic`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <DarkModeToggle />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
