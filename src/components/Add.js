import React, { Component } from "react";
import { connect } from "react-redux";
class Add extends Component {
  constructor() {
    super();

    this.state = {
      newsTitle: "",
      description: "",
      category_id: "",
      country_id: ""
    };
    // this.handleSubmit = this.heandleInpurchange.bind();
    // this.heandleInpurchange = this.heandleInpurchange.bind();
  }

  // heandleInpurchange(e) {
  //     console.log(e.target.value);
  //     // this.setState({ [e.target.name]: [e.target.value] });
  // }

  // handleSubmit(e) {
  //     e.preventDefault;
  //     this.props.dispatch({
  //         type: "ADD_POST",
  //         post: this.state
  //     });
  // }

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
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={e => this.heandleInpurchange(e)}
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Category Id</label>
            <select className="form-control">
              <option value="">--- select Category ----</option>
              {setdata}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Country Id</label>
            <select className="form-control">
              <option value="">--- select country ----</option>
              {setdata1}
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

export default connect(mapStateToProps)(Add);
