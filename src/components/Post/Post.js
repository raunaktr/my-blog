import React from "react";
import { H3 } from "../Heading";
import Card from "../Card";
import WideSection from "../WideSection";

const post = (props) => (
  <WideSection width="250px">
    <Card px={1.5} py={1.5} hover={false} key={post.id} onClick={props.clicked}>
      <H3>{props.title}</H3>
      <Card.FinePrint>{props.author}</Card.FinePrint>
    </Card>
  </WideSection>
);

export default post;
