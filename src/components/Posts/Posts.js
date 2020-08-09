import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import WideSection from "../WideSection";
import Paragraph from "../Paragraph";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Raunak",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push({ pathname: "/" + id });
  };

  render() {
    let posts = <Paragraph>Something went wrong...</Paragraph>;
    if (!this.state.error) {
      posts = this.state.posts
        .filter((post) => post.id)
        .map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          );
        });
    }
    return (
      <WideSection
        sx={{
          display: "grid",
          gridGap: 10,
          gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
        }}
      >
        {posts}
      </WideSection>
    );
  }
}

export default Posts;
