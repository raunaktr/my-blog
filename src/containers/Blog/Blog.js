import React, { Component } from "react";

import Main from "../../components/Main";
import PageHeader from "../../components/PageHeader";
import Posts from "../../components/Posts/Posts";
import NewPost from "../../components/NewPost/NewPost";
import { Route, NavLink, Switch } from "react-router-dom";
import classes from "./Blog.css";
import FullPost from "../../components/FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <Main>
        <nav className={classes.Blog}>
          <ul>
            <li>
              <NavLink to="/" exact>
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?quick-submit=true",
                }}
                exact
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
        <PageHeader title="Hey, i'm raunak!"></PageHeader>
        <hr />
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </Main>
    );
  }
}

export default Blog;
