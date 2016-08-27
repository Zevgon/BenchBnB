import { connect } from 'react-redux';
import { requestBenches } from '../actions/bench_actions';
import Search from './search';
import {allBenches} from '../util/allBenches';

const mapStateToProps = state => ({
  benches: allBenches(state.benches)
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
