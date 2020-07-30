import React, { Component } from "react";
import axios from "axios";
import Paragraph from "../Paragraph";
import Button from "../Button";
import Card from "../Card";
import CardGrid from "../CardGrid";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get("/posts/" + this.props.id).then((response) => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.id).then((response) => {
      console.log(response);
    });
  };

  render() {
    let post = <Paragraph centered>Please Select a Post</Paragraph>;
    if (this.props.id) {
      post = <Paragraph>Loading...</Paragraph>;
    }
    if (this.state.loadedPost) {
      post = (
        <CardGrid>
          <Card>
            <Card.Title>{this.state.loadedPost.title}</Card.Title>
            <Card.Body>
              <Paragraph>{this.state.loadedPost.body}</Paragraph>
            </Card.Body>
            <Card.FinePrint>
              <Button className="Delete" onClick={this.deletePostHandler}>
                Delete
              </Button>
            </Card.FinePrint>
          </Card>
        </CardGrid>
      );
    }
    return post;
  }
}

export default FullPost;
