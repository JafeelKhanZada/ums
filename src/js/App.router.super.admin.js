import React, { useEffect } from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./util/Sidebar";
import * as Action from "./redux/actions";
const AsynHome = Loadable({
  loader: () => import("./components/Super Admin/Home"),
  loading: () => <div>Loading......</div>,
});
const AsyncLogin = Loadable({
  loader: () => import("./components/Student/Login"),
  loading: () => <div>Loading......</div>,
});
const AsyncStudent = Loadable({
  loader: () => import("./components/Super Admin/Student/AddStudent"),
  loading: () => <div>Loading......</div>,
});
const Router = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(({ Authentication }) => Authentication);
  useEffect(() => {
    dispatch(Action.TokenVerify());
  }, []);
  return (
    <BrowserRouter>
      <SideBar>
        <Switch>
          <Route
            path="/Home"
            exact
            render={() =>
              auth === true ? <AsynHome /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/Login"
            render={() =>
              auth === false ? <AsyncLogin /> : <Redirect to="/Add-Student" />
            }
          />
          <Route
            path="/Add-Student"
            render={() =>
              auth === true ? <AsyncStudent /> : <Redirect to="/Add-Student" />
            }
          />
        </Switch>
      </SideBar>
    </BrowserRouter>
  );
};
export default Router;
