import React, { Component } from "react";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Main from "../../components/Main";
import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";
import PageHeader from "../../components/PageHeader";
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
    let posts = <p>Something went wrong...</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
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
        <Layout>
          <SubLayout>{posts}</SubLayout>
          <SubLayout>
            <FullPost id={this.state.selectedPostId} />
          </SubLayout>

          <NewPost />
        </Layout>
      </Main>
    );
  }
}

export default Blog;
