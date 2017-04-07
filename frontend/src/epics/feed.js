import {ajax} from "rxjs/observable/dom/ajax";

import {LOAD_FEED, loadFeed} from "../actions/feed";

export const loadFeedEpic = action$ =>
  action$.ofType(LOAD_FEED)
    .mergeMap(action =>
      ajax({url: 'TODO'})
        .map(response => loadFeedSuccess(response))
    );
