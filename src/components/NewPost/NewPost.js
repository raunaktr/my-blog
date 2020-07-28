import React, { Component } from "react";
import axios from "axios";
import Button from "../Button";
import { H2 } from "../Heading";

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
      <div className="NewPost">
        <H2>Add a Post</H2>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Raunak">Raunak</option>
          <option value="Max">Max</option>
        </select>
        <Button onClick={this.postDataHandler}>Add Post</Button>
      </div>
    );
  }
}

export default NewPost;
