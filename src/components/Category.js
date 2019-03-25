import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
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

export default connect(mapStateToProps)(Category);
