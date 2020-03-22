import { fork, all } from "redux-saga/effects";
import * as Action from "../../components/rootWatcher";
export function* RootSaga() {
  yield all([...Object.values(Action)].map(fork));
}
