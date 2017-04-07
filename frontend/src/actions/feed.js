export const LOAD_FEED = 'LOAD_FEED';
export const LOAD_FEED_SUCCESS = 'LOAD_FEED_SUCCESS';

export function loadFeed() {
  return {type: LOAD_FEED}
}

export function loadFeedSuccess(payload) {
  return {type: LOAD_FEED_SUCCESS, payload}
}
