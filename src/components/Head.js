import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Head = styled(Text)`
  font-Family: Helvetica;
`;

export default (props) => <Head  {...props} />;
