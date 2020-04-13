import React from "react";
import { Link } from "react-router-dom";

function Anchor(props) {
  return props.href ? (
    <a href={props.href} target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  ) : (
    <Link {...props}>{props.children}</Link>
  );
}

export default Anchor;
