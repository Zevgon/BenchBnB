import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div>
        <BenchMap benches={this.props.benches} updateBounds={this.props.updateBounds}/>
        <BenchIndex benches={this.props.benches} requestBenches={this.props.requestBenches} />
      </div>
    );
  }
}

export default Search;
