import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fatchNews, fatchAllCategory, fatchAllCountry } from "./action";

import Navbar from "./components/Nabvar";
import FormCom from "./components/FormCom";
import AllPost from "./components/AllPost";
import Add from "./components/Add";
import Edit from "./components/Edit";

class App extends Component {
  componentDidMount() {
    this.props.fatchNews();
    this.props.fatchAllCategory();
    this.props.fatchAllCountry();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <br />
          <br />
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Route path="/" exact component={FormCom} />
              <Route path="/addPost" exact component={Add} />
              <Route path="/editPost/:id" exact component={Edit} />
            </div>
            <div className="col-md-8">
              <AllPost />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fatchNews, fatchAllCategory, fatchAllCountry }
)(App);
