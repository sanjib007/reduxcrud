import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";

// import { fatchNews } from "../action/index";
import Category from "./Category";
import Country from "./Country";

require("../../public/bootstrap-less/bootstrap/bootstrap.less");

class AllPost extends Component {
  constructor() {
    super();

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is`, pageNumber);
    // this.setState({ activePage: pageNumber });
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

    return (
      <div>
        {text}

        <br />
        <br />
        <Pagination
          activePage={this.props.news.current_page}
          itemsCountPerPage={this.props.news.per_page}
          totalItemsCount={this.props.news.total}
          pageRangeDisplayed={this.props.news.per_page}
          onChange={() => this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news.newses
});

export default connect(mapStateToProps)(AllPost);
