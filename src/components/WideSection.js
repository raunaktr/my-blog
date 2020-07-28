import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

const WideSection = styled(Box)`
  @media screen and (max-width: ${(props) => props.theme.breakpoints}) {
    max-width: 100%;
  }
`;

export default (props) => (
  <WideSection
    width={["100%", "150%", "200%"]}
    mr={[0, "-25%", "-50%"]}
    {...props}
  />
);
