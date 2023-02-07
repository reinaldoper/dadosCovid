import {
  NAMEINPUT,
} from '../actions/action';

const INICIAL_STATE = {
  books: [],
};

const reducerFetch = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case NAMEINPUT: return ({ ...state, books: action.payload });
  default: return state;
  }
};

export default reducerFetch;
