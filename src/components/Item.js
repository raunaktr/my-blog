import React from "react";
import styled from "styled-components";
import { Box, Composition } from "atomic-layout";
import { IoMdMore } from "react-icons/io";
import Image from "./Image";

const Container = styled.div`
  background-color: hsl(343, 100%, 39%);
  border-radius: 16px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

const ItemTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
`;

const ItemSubtitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
`;

const Item = (props) => {
  return (
    <Composition
      as={Container}
      areas="image description actions"
      templateCols="80px 1fr auto"
      alignItems="center"
      gap={20}
      padding={25}
    >
      {(Areas) => (
        <>
          <Areas.Image
            as={Image}
            src={props.imageUrl}
            alt="Lets say its an alernative text"
          />
          <Areas.Description>
            <ItemTitle>{props.title}</ItemTitle>
            <Box as={ItemSubtitle} margin="10px 0 0">
              {props.subtitle}
            </Box>
          </Areas.Description>
          <Areas.Actions>
            <IoMdMore size={32} fill=" hsl(46, 100%, 50%)" />
          </Areas.Actions>
        </>
      )}
    </Composition>
  );
};

export default Item;
