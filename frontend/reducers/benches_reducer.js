import { BenchConstants } from '../actions/bench_actions';
import merge from 'lodash/merge';

const BenchesReducer = (state = {}, action) => {
  switch (action.type) {
    case BenchConstants.RECEIVE_BENCHES:
      let newState = merge({}, action.benches);
      window.newState = newState;
      return newState;
    default:
      return state;
  }
};

export default BenchesReducer;
