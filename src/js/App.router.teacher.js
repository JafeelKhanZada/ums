import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "./util/Sidebar";
const AsynHome = Loadable({
  loader: () => import("./components/Teacher"),
  loading: () => <div>Loading......</div>,
});
const Router = () => {
  const { auth } = useSelector(({ Authentication }) => Authentication);

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
