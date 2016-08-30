import React from 'react';
import MarkerManager from '../util/marker_manager';
import { updateBounds } from '../actions/filter_actions';

class BenchMap extends React.Component {
  componentDidMount () {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
    google.maps.event.addListener(this.map, 'idle', () => {
      let north = this.map.getBounds().f.b;
      let south = this.map.getBounds().f.f;
      let east = this.map.getBounds().b.f;
      let west = this.map.getBounds().b.b;
      let ne = {lat: north, lng: east};
      let sw = {lat: south, lng: west};
      let bounds = {ne, sw};
      let that = this;
      this.props.updateBounds(bounds);
    });
  }

  componentWillReceiveProps (newProps) {
    this.MarkerManager.updateMarkers(newProps.benches);
  }

  render () {
    return (
      <div id='map-container' ref='map'></div>
    );
  }
}

export default BenchMap;
