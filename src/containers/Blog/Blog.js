import React, { Component } from "react";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Main from "../../components/Main";
import PageHeader from "../../components/PageHeader";
import WideSection from "../../components/WideSection";
import CardGrid from "../../components/CardGrid";
import Paragraph from "../../components/Paragraph";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
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
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
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
      <Main>
        <PageHeader title="Hey, i'm raunak!"></PageHeader>
        <WideSection
          sx={{
            display: "grid",
            gridGap: 10,
            gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
          }}
        >
          {posts}
        </WideSection>
        <hr />
        <WideSection>
          <CardGrid>
            <FullPost id={this.state.selectedPostId} />
          </CardGrid>
        </WideSection>

        <NewPost />
      </Main>
    );
  }
}

export default Blog;
