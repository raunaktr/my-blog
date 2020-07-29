import React from "react";
import styled from "styled-components";
import { Box, Flex } from "rebass";
import Text from "./Text";

const Blockqoute = styled(Text).attrs({
  fontFamily: "system",
  fontSize: 3,
  my: 2,
})`
  padding: 0 1.5em;
  position: relative;
  font-style: italics;
  line-height: 1.5em;
  color: #666;

  &:before {
    font-family: Georgia;
    display: block;
    font-size: 5pc;
    content: "\\201C";
    postion: absolute;
    left: -1rem;
    top: -1rem;
    line-height: initial;
    color: #bbb;
  }
`;

export const Cite = styled(Text)`
  display: block;
  margin-top: 0.5em;
  color: #999;

  &:before {
    content: "— ";
  }
`;

export default Blockqoute;
