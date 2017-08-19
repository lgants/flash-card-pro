import { combineReducers } from 'redux';
import { SET_STACK, LOAD_STACKS, SAVE_STACK } from '../actions/index';

function stack(state = {}, action) {
  switch(action.type) {
    case SET_STACK:
      return action.stack
    default:
      return state;
  }
}

function stacks(state = [], action) {
  switch(action.type) {
    case LOAD_STACKS:
      return action.stacks;
    case SAVE_STACK:
      return [...state, {...action.stack, id: state.length }];
    default:
      return state;
  }
}

// NOTE exports object with key/value of stack/stacks; combineReducers treats all reducers as if it were a default export
export default combineReducers({ stack, stacks });
