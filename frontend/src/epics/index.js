import {combineEpics} from "redux-observable";
import {loadFeedEpic} from "../epics/feed";

export const rootEpic = combineEpics(
  loadFeedEpic,
);
