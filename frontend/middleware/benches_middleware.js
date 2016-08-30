import { BenchConstants } from '../actions/bench_actions';
import { fetchBenches } from '../util/bench_api_util';
import { receiveBenches, requestBenches } from '../actions/bench_actions';
import { FilterConstants } from '../actions/filter_actions';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      const success = data => {
        return dispatch(receiveBenches(data));
      }
      const filters = getState().filters;
      console.log("in benches middleware, filters are " + filters);
      fetchBenches(success, filters);
      return next(action);
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestBenches());
      break;
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
