import React, { Component } from "react";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Raunak",
  };
  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <input
          type="text"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Raunak">Raunak</option>
          <option value="test">test</option>
        </select>
        <button>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
