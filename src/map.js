// main.js
import React, { Component } from 'react';
import './map.css';

import { connect } from 'react-redux'
import MapData from './data/mapzen-maps'
require('mapzen.js');

let layer, scene;

class Map extends Component {
  componentDidMount() {
    // creates a map with basic buble wrap style
    var lon = -74.009;
    var lat = 40.70531;
    L.Mapzen.apiKey = this.apiKey = 'valhalla-RfDii2g'; // eslint-disable-line no-undef
    var map = L.Mapzen.map('map'); // eslint-disable-line no-undef

    map.setView([lat, lon], 13);

    L.Mapzen.geocoder().addTo(map); // eslint-disable-line no-undef

    map.on('tangramloaded', function (e) {
      layer = e.tangramLayer;
      scene = layer.scene;
    })

  }

  render() {
    return (
      <div id = "map" />
    );
  }
}

const getImportObject = function (sceneArray) {
  return {
    import: sceneArray
  };
};


const loadNewCombination = state => {
  if (scene) {
    const baseMapURL = MapData[state.baseMap].baseURL;
    const labelURL = `${MapData[state.baseMap].attributes.label.baseURL}${state.labelDetail}${MapData[state.baseMap].attributes.label.suffixURL}`;
    if (state.baseMap ==='refill') {
      const colorThemeURL = `${MapData[state.baseMap].attributes.colors.baseURL}${state.colorTheme}${MapData[state.baseMap].attributes.colors.suffixURL}`;
      scene.load(getImportObject([baseMapURL, labelURL, colorThemeURL]))
    } else {
      scene.load(getImportObject([baseMapURL, labelURL]));
    }
  }
}

const mapStateToProps = state => {
  return {
    currentMap: loadNewCombination(state)
  }
}

const FilteredMap = connect(
  mapStateToProps
)(Map);

export default FilteredMap;