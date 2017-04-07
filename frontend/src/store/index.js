import {createEpicMiddleware} from "redux-observable";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducers/index";
import {rootEpic} from "../epics/index";

export function createInitStore() {
  const epicMiddleware = createEpicMiddleware(rootEpic);

  return createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
}
