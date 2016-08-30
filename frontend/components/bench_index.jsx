import React from 'react';

class BenchIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
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
