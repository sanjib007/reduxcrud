import React, { Component } from "react";
import { connect } from "react-redux";
// import { fatchAllCategory, fatchAllCountry } from "../action/index";

class FormCom extends Component {
  //   componentDidMount() {
  //     this.props.fatchAllCountry();
  //     this.props.fatchAllCategory();
  //   }
  render() {
    var setdata = "";
    var setdata1 = "";

    if (typeof this.props.categories !== "undefined") {
      setdata = this.props.categories.map((aCategory, index) => (
        <option key={index} value={aCategory.id}>
          {aCategory.newsType}
        </option>
      ));
    }
    if (typeof this.props.countries !== "undefined") {
      setdata1 = this.props.countries.map((aCountry, index) => (
        <option key={index} value={aCountry.id}>
          {aCountry.name}
        </option>
      ));
    }

    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Country</label>
            <select className="form-control">
              <option value="">--- select country ----</option>
              {setdata1}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Category</label>
            <select className="form-control">
              <option value="">--- select Category ----</option>
              {setdata}
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
    categories: state.allCategory
  };
};

export default connect(
  mapStateToProps
  //{ fatchAllCategory, fatchAllCountry }
)(FormCom);
