import React from 'react';

class BenchIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestBenches();
  }

  render () {
    let benchArray;
    if (this.props.benches.benches) {
      benchArray = this.props.benches.benches.map( bench => (
        <li key={bench.description}>{bench.description}</li>
      ));
    }
    return (
      <ul>
        {benchArray}
      </ul>
    );
  }
}

export default BenchIndex;
