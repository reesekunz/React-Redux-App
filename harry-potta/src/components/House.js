import React from "react";
import { connect } from "react-redux";

const House = props => {
    return (
    <h1>{props.test}</h1>
    )
}

const mapStateToProps = state => {
    return {
      test: state.test,
    };
  };


  export default connect(
    mapStateToProps,
    {}
  )(House);