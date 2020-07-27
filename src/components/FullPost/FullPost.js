import React, { Component } from "react";

class fullpost extends Component {
  render() {
    let post = <p> Please select a Post!</p>;
    post = (
      <div>
        <h1>Title</h1>
        <p>Content</p>
        <div className="Edit">
          <button className="Delete">Delete</button>
        </div>
      </div>
    );
    return post;
  }
}

export default fullpost;
