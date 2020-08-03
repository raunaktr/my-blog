import React, { Component } from "react";

import Main from "../../components/Main";
import PageHeader from "../../components/PageHeader";
import Posts from "../../components/Posts/Posts";

class Blog extends Component {
  render() {
    return (
      <Main>
        <PageHeader title="Hey, i'm raunak!"></PageHeader>
        <hr />
        <Posts />
      </Main>
    );
  }
}

export default Blog;
