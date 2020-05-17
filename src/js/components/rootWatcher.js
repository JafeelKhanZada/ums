import { takeLatest, call, put } from "redux-saga/effects";
import * as Action from "../redux/constant";
import axios from "axios";
export * from "./Home/store/saga/";
export function* workerLogin(e) {
  console.log(e);
  //   let JSON = yield axios
  //     .post("/api/student/login", e)
  //     .then((res) => res);
}
export function* watcherLogin() {
  yield takeLatest({ type: Action.LOGIN_IN, workerLogin });
}
