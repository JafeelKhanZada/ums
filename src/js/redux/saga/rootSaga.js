import { takeLatest, call, put, all } from "redux-saga/effects";
import * as Action from "../constant";
export function* workerLogin(e) {
  console.log(e);
  //   let JSON = yield axios
  //     .post("/api/student/login", e)
  //     .then((res) => res);
}
export function* watcherLogin() {
  yield takeLatest({ type: Action.LOGIN_IN, workerLogin });
}

export function* RootSaga() {
  yield all([watcherLogin()]);
  // yield all([...Object.values(Action)].map(fork));
}
