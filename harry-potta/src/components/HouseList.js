import React from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";
import House from "./House";

import { getData } from "../actions";

const HouseList = props => {
  return (
    <div>
      <h1>Welcome Muggles! </h1>
      {/* When button is clicked, invoke getData action creator, which dispatches FETCHING_HARRY_POTTER_DATA.
      FETCHING_HARRY_POTTER_DATA updates state to show isLoading is true. So when you click on button, if isLoading is true, the loader will show up onClick. */}
      <button onClick={props.getData}>
        {/* When is loading, show Loader Spinner. If not loading, show landing page. isLoading currently toggled to false in reducer */}
        {props.isLoading ? (
          <Loader
            type="CradleLoader"
            // other loader types: https://mhnpd.github.io/react-loader-spinner/?path=/story/loader--cradleloader
            color="#00BFFF"
            height="100"
            width="100"
          />
        ) : (
          "Get House Data"
        )}
      </button>
      {/* add in props.harryPotterHouses && to fix undefined error b/c currently mapping over an empty array of data (adding later) */}
      {props.harryPotterHouses &&
        props.harryPotterHouses.map(house => (
          <House key={house.name} house={house} />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    harryPotter: state.harryPotter
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(HouseList);
