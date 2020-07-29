import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";
import SubLayout from "./SubLayout";
import { H2 } from "./Heading";
import Head from "./Head";

export default (props) => (
  <Flex
    flexDirection="column"
    width={1}
    mb={props.children ? 4 : 3}
    mt={[4, 5]}
    justifyContent="center"
    {...{ ...props, title: undefined }}
  >
    <Head
      title={props.title}
      description={props.description}
      image={props.image}
    />
    <H2 alignSelf="center" textAlign="center" mt={0}>
      {props.title}
    </H2>
    {props.children}
  </Flex>
);
