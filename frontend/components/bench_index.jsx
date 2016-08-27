import React from 'react';

class BenchIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestBenches();
  }

  render () {
    console.log(this.props.benches);
    const benchArray = this.props.benches.map( bench => (
      <li key={bench.description}>{bench.description}</li>
    ));
    return (
      <ul>
        {benchArray}
      </ul>
    );
  }
}

export default BenchIndex;
