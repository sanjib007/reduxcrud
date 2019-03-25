import React, { Component } from "react";
import { connect } from "react-redux";
// import { fatchAllCountry } from "../action/index";

class Country extends Component {
  // componentDidMount() {

  // }
  render() {
    if (!this.props.country) {
      return "";
    }
    return <div>Country Name : {this.props.country.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    country: state.allCountry.find(
      aCountry => aCountry.id === ownProps.countryId
    )
  };
};

export default connect(mapStateToProps)(Country);
