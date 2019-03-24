import React, { Component } from "react";
import { connect } from "react-redux";
import { fatchAllCategory } from "../action/index";

class Category extends Component {
  componentDidMount() {
    this.props.fatchAllCategory();
  }
  render() {
    if (!this.props.category) {
      return "";
    }
    return <div>Category Name : {this.props.category.newsType}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.allCategory.find(aCat => aCat.id === ownProps.categoryId)
  };
};

export default connect(
  mapStateToProps,
  { fatchAllCategory }
)(Category);
