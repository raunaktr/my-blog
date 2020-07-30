import React, { Component } from "react";
import axios from "axios";
import Button from "../Button";
import WideSection from "../WideSection";
import Item from "../Item";
import Card from "../Card";

import styled from "styled-components";
import { Box } from "rebass";
import { Select } from "@rebass/forms";
import thumbnailUrl from "../../thumbnail.jpg";

const StyledForm = styled.div.attrs({
  as: "div",
})`
  display: flex;
  flex-flow: column;
  align-items: left;
  width: 80%;
  margin: 20px auto;
  padding: 0.5em;
`;

const Label = styled(Box).attrs({
  as: "label",
  my: 2,
  mr: 2,
})`
  font-size: 1em;
  border-radius: 3px;
  width: 20em;
  padding: 0.5em;
  display: block;
`;

const InputBox = styled(Box).attrs({
  type: "text",
  as: "input",
  my: 2,
  mr: 2,
})`
  font-size: 1em;
  border-radius: 3px;
  width: 20em;
  border: 1px solid ${(props) => props.theme.colors.greys[1]};
  padding: 0.5em;
  :hover {
    border: 1px solid ${(props) => props.theme.colors.greys[3]};
  }
`;

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Raunak",
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      content: this.state.body,
      author: this.state.author,
    };
    axios.post("/posts/", data).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <WideSection>
        <Card hover={false} my={4}>
          <Card.Title css="margin-top:0">Add a Post</Card.Title>
          <StyledForm>
            <Label p={1}>Title</Label>
            <InputBox
              p={2}
              type="text"
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
            <Label p={1}>Content</Label>
            <InputBox
              p={2}
              type="textarea"
              value={this.state.content}
              onChange={(event) =>
                this.setState({ content: event.target.value })
              }
            />

            <Label p={1}>Author</Label>
            <Select
              p={2}
              width="250px"
              value={this.state.author}
              onChange={(event) => this.setState({ title: event.target.value })}
            >
              <option value="Raunak">Raunak</option>
              <option value="Max">Max</option>
            </Select>

            <Card.Body>
              <Button onClick={this.postDataHandler}>Add Post</Button>
            </Card.Body>
          </StyledForm>
        </Card>

        <Item
          title="Hello"
          subtitle="can you hear me"
          imageUrl={thumbnailUrl}
        />
      </WideSection>
    );
  }
}

export default NewPost;
