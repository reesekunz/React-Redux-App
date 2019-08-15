import React from "react";
import { connect } from "react-redux";

import Loader from 'react-loader-spinner'

const HouseList = props => {
    return (
<div>
<h1>Welcome Muggles! </h1>
<button>
    {/* When is loading, show Loader Spinner. If not loading, show landing page. isLoading currently toggled to false in reducer */}
    {props.isLoading ?
    <Loader type="CradleLoader"
    // other loader types: https://mhnpd.github.io/react-loader-spinner/?path=/story/loader--cradleloader
    color="#00BFFF"
    height="100"
    width="100"/> : 
    "Get House Data"}
    </button>
    </div>

    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
    };
  };


  export default connect(
    mapStateToProps,
    {}
  )(HouseList);

