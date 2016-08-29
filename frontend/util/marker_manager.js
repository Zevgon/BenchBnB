class MarkerManager {
  constructor (map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers (benches) {
    let benchesToAdd = this._benchesToAdd(benches);
    benchesToAdd.forEach(bench => {
      this.markers.push(this._createMarkerFromBench(bench));
    });
  }

  _benchesToAdd (benchesInState) {
    let result = [];
    let that = this;
    benchesInState.forEach(bench => {
      result.push(bench);
    });

    return result;
  }

  _createMarkerFromBench (bench) {
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.title
    });

    return marker;
  }
}

export default MarkerManager;
