import React, { useState, useEffect } from "react";
import SuperAdminRouter from "./App.router.super.admin";
import StudentRouter from "./App.router.student";
import TeacherRouter from "./App.router.teacher";
import AdminRouter from "./App.router.admin";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loadable from "react-loadable";
import * as Action from "./redux/actions";
import * as Theme from "./util/Theme";
import "./Styles.scss";
const AsyncLogin = Loadable({
  loader: () => import("./components/Login"),
  loading: () => <div>Loading......</div>,
});
function App() {
  const data = useSelector(({ Authentication }) => Authentication);
  const [auth, setAuth] = useState(false);
  const [role, setRoles] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.TokenVerify());
  }, []);
  useEffect(() => {
    setAuth(data?.auth);
    setRoles(data?.role);
  }, [data]);
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme.Light}>
        <BrowserRouter>
          {role === "STUDENT" ? (
            <StudentRouter />
          ) : role === "SUPER_ADMIN" ? (
            <SuperAdminRouter />
          ) : role === "TEACHER" ? (
            <TeacherRouter />
          ) : role === "ADMIN" ? (
            <AdminRouter />
          ) : null}
          <Route
            path="/Login"
            render={() =>
              auth === false ? <AsyncLogin /> : <Redirect to="/Home" />
            }
          />
          {!auth ? (
            <Route
              path="*"
              render={() =>
                auth === false ? (
                  <Redirect to="/login" />
                ) : (
                  <Redirect to="/Home" />
                )
              }
            />
          ) : null}
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;
