import React, { Component } from "react";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  state = {
    posts: [],
    error: false,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map((post) => {
          return {
            ...post,
            author: "Raunak",
          };
        });
        this.setState({ posts: updatedPost });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  render() {
    let posts = <p> Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return <Post key={post.id} title={post.title} author={this.author} />;
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
