import { connect } from 'react-redux';
import { requestBenches } from '../actions/bench_actions';
import Search from './search';
import {allBenches} from '../util/allBenches';
import { updateBounds } from '../actions/filter_actions';

const mapStateToProps = state => ({
  benches: allBenches(state.benches)
});

const mapDispatchToProps = (dispatch) => ({
  updateBounds: bounds => dispatch(updateBounds(bounds)),
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
