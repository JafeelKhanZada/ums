import * as Action from "../constant";
import { takeLatest } from "redux-saga/effects";
import * as Actions from "./worker";
export function* watcherIncrement() {
  yield takeLatest(Action.INCREMENT, Actions.incrementAsync);
}
export function* watcherDecrement() {
  yield takeLatest(Action.DECREMENT, Actions.decrementAsync);
}
