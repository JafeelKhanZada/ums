import * as Action from "../constant";
import { put } from "redux-saga/effects";

export function* incrementAsync(action) {
  yield put({ type: Action.INCREMENT_ASYNC, payload: action.payload });
}
export function* decrementAsync(action) {
  yield put({ type: Action.DECREMENT_ASYNC, payload: action.payload });
}
