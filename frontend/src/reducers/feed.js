import {LOAD_FEED_SUCCESS} from "../actions/feed";

export function feed(state = [], action) {
  switch (action.type) {
    case LOAD_FEED_SUCCESS:
      return [
        ...state,
        ...action.payload.response
      ];
    default:
      return state
  }
}
