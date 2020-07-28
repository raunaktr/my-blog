import React from "react";
import { H3 } from '../Heading'

const post = (props) => (
  <article className="Post" onClick={props.clicked}>
    <H3>{props.title}</H3>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default post;
