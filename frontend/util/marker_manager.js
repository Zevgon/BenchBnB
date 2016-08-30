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

    let benchesToRemove = this._benchesToRemove(benches);
    benchesToRemove.forEach(bench => {
      this._removeMarker(bench);
    });
  }

  _benchesToAdd (benchesInState) {
    let result = [];
    let markerIds = this.markers.map(marker => {
      return marker.id;
    });
    benchesInState.forEach(bench => {
      if (!markerIds.includes(bench.description)) {
        result.push(bench);
      }
    });
    return result;
  }

  _benchesToRemove (benchesInState) {

    let result = [];
    let benchDescriptions = benchesInState.map(bench => bench.description);
    this.markers.forEach(marker => {
      if (!benchDescriptions.includes(marker.id)) {
        result.push(marker);
      }
    });
    return result;
  }

  _removeMarker (marker) {

    marker.setMap(null);
    let idx = this.markers.indexOf(marker);
    if (idx > -1) {
      this.markers.splice(idx, 1);
    }
  }

  _createMarkerFromBench (bench) {
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.title
    });

    marker.id = bench.description;

    return marker;
  }
}

export default MarkerManager;
