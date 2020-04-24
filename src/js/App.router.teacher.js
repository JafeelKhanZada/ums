import React, { useEffect } from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./util/Sidebar";
import * as Action from "../js/redux/actions";
const AsynHome = Loadable({
  loader: () => import("./components/Teacher_Dashboard/Teacher"),
  loading: () => <div>Loading......</div>,
});
const AsyncLogin = Loadable({
  loader: () => import("./components/Stundent_Dashboard/Login"),
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
              auth === false ? <AsyncLogin /> : <Redirect to="/Home" />
            }
          />
          <Route
            path="*"
            render={() =>
              auth === true ? <AsynHome /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </SideBar>
    </BrowserRouter>
  );
};
export default Router;
