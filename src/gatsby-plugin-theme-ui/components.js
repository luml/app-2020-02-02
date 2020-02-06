/** @jsx jsx */
import { jsx } from "theme-ui"

export default {
  h1: props => (
    <h1 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h1>
  ),
}

// TODO What does this component work for?
