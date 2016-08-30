import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

export const FilterReducer = (state = {}, action) => {
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      return merge({}, state, action.bounds);
    default:
      return state;
  }
};
