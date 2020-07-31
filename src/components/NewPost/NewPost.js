import React, { Component } from "react";
import axios from "axios";
import Button from "../Button";
import WideSection from "../WideSection";
import Card from "../Card";

import styled from "styled-components";
import { Box } from "rebass";

const FormLayout = styled.div.attrs({
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
  text-align: justify;
  padding: 0.5em;
`;

const InputBox = styled(Box).attrs({
  type: "text",
  as: "input",
  my: 2,
  mr: 2,
})`
  font-size: 1em;
  border-radius: 3px;
  width: 80%;
  border: 1px solid ${(props) => props.theme.colors.greys[1]};
  padding: 0.5em;
  display: block;
  :hover {
    border: 1px solid ${(props) => props.theme.colors.greys[3]};
  }
`;

const TextAreaBox = styled(Box).attrs({
  type: "textarea",
  as: "textarea",
  my: 2,
  mr: 2,
})`
  font-size: 1em;
  border-radius: 3px;
  width: 80%;
  border: 1px solid ${(props) => props.theme.colors.greys[1]};
  padding: 0.5em;
  display: block;
  :hover {
    border: 1px solid ${(props) => props.theme.colors.greys[3]};
  }
`;

const SelectBox = styled(Box).attrs({
  type: "select",
  as: "select",
  my: 2,
  mr: 2,
})`
  font-size: 1em;
  border-radius: 3px;
  width: 80%;
  border: 1px solid ${(props) => props.theme.colors.greys[1]};
  padding: 0.5em;
  display: block;
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
          <Card.Title>Add a Post</Card.Title>
          <FormLayout>
            <Label p={1}>Title</Label>
            <InputBox
              p={2}
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
            <Label p={1}>Content</Label>
            <TextAreaBox
              p={2}
              value={this.state.content}
              onChange={(event) =>
                this.setState({ content: event.target.value })
              }
            />
            <Label p={1}>Author</Label>
            <SelectBox>
              <option value="Raunak">Raunak</option>
              <option value="Max">Max</option>
            </SelectBox>

            <Card.Body>
              <Button onClick={this.postDataHandler}>Add Post</Button>
            </Card.Body>
          </FormLayout>
        </Card>
      </WideSection>
    );
  }
}

export default NewPost;
