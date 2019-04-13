import {FETCH_POSTS, NEW_POST, LATEST_POSTS} from '../actions/types';

const intialState = {
  items: [],
  items2: [],
  item: {},
};

export default function (state = intialState, action) {
  switch (action.type) {
    case LATEST_POSTS:
      return {
        ...state,
        items2: action.payload,
      };

    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}
