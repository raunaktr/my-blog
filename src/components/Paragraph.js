import React from "react";
import { Box } from "rebass";
import styled from "styled-components";
import Text from "./Text";

const Wrapper = styled(Box)`
  max-width: 35em;
  width: 100%;
  position: relative;
  z-index: 1;
  ${(props) => props.centered && `margin:0 auto`}
`;

export default ({ centered, as, ...props }) => (
  <Wrapper centered={centered} as={as}>
    <Text color="#333" mb={3} fontSize="18px" lineHeight={1.6} {...props} />
  </Wrapper>
);
