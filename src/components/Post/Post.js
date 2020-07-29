import React from "react";
import { H3 } from "../Heading";
import Card from "../Card";
import WideSection from "../WideSection";

const post = (props) => (
  <WideSection>
    <Card hover={false} key={post.id}>
      <article className="Post" onClick={props.clicked}>
        <H3>{props.title}</H3>
        <div className="Info">
          <div className="Author">{props.author}</div>
        </div>
      </article>
    </Card>
  </WideSection>
);

export default post;
