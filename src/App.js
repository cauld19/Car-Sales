import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from "react-redux";


import {addFeature, removeFeatureCar} from "./actions"


const App = props => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeatureCar(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
    console.log("cicked", item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures  additionalFeatures={props.additionalFeatures}
          buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {addFeature, removeFeatureCar}
)(App);
