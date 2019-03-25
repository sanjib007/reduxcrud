import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fatchNewPost } from "../action";
class Add extends Component {
  constructor() {
    super();

    this.state = {
      newsTitle: "",
      description: "",
      category_id: "",
      country_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.heandleInpurchange = this.heandleInpurchange.bind(this);
  }

  heandleInpurchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const news = {
      newsTitle: this.state.newsTitle,
      description: this.state.description,
      category_id: this.state.category_id,
      country_id: this.state.country_id
    };
    console.log("add news state", news);
    this.props.fatchNewPost(news);
  }

  render() {
    var categoryOption = "";
    var countryOption = "";

    if (typeof this.props.categories !== "undefined") {
      categoryOption = this.props.categories.map((aCategory, index) => (
        <option key={index} value={aCategory.id}>
          {aCategory.newsType}
        </option>
      ));
    }
    if (typeof this.props.countries !== "undefined") {
      countryOption = this.props.countries.map((aCountry, index) => (
        <option key={index} value={aCountry.id}>
          {aCountry.name}
        </option>
      ));
    }
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              name="newsTitle"
              onChange={e => this.heandleInpurchange(e)}
              value={this.state.newsTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <textarea
              type="text"
              className="form-control"
              name="description"
              onChange={e => this.heandleInpurchange(e)}
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Category Id</label>
            <select
              className="form-control"
              name="category_id"
              onChange={e => this.heandleInpurchange(e)}
              value={this.state.category_id}
            >
              <option value="">--- select country ----</option>
              {categoryOption}
            </select>
            {/* <select
              className="form-control"
              namd="category_id"
              onChange={e => this.heandleInpurchange(e)}
              value={this.state.category_id}
            >
              <option value="">--- select Category ----</option>
              {categoryOption}
            </select> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Country Id</label>
            <select
              className="form-control"
              name="country_id"
              onChange={e => this.heandleInpurchange(e)}
              value={this.state.country_id}
            >
              <option value="">--- select country ----</option>
              {countryOption}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    countries: state.allCountry,
    categories: state.allCategory,
    aNews: state.news.aNews
  };
};
Add.PropTypes = {
  fatchNewPost: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { fatchNewPost }
)(Add);
