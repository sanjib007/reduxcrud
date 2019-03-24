import React, { Component } from "react";
import { connect } from "react-redux";
import { fatchNews } from "../action/index";
import Category from "./Category";
import Country from "./Country";

class AllPost extends Component {
  componentDidMount() {
    this.props.fatchNews();
  }
  render() {
    if (!this.props.news.data) {
      return <span>No Data is found.</span>;
    }
    const divStyle = {
      marginBottom: "20px"
    };

    const text = this.props.news.data.map((e, index) => {
      return (
        <div key={index} className="media" style={divStyle}>
          <div className="media-left">
            <a href="#">
              <img className="media-object" src="..." alt="..." />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{e.newsTitle}</h4>
            <p>{e.description}</p>
            <div>
              <Category categoryId={e.category_id} />
            </div>
            <div className="pull-right">
              <Country countryId={e.country_id} />
            </div>
          </div>
        </div>
      );
    });

    return <div>{text}</div>;
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { fatchNews }
)(AllPost);
