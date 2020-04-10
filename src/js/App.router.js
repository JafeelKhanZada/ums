import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBar from "./util/Sidebar";
const AsynHome = Loadable({
  loader: () => import("./components/Home/Home"),
  loading: () => <div>Loading......</div>,
});
const AsyncLogin = Loadable({
  loader: () => import("./components/Home/Home"),
  loading: () => <div>Loading......</div>,
});
const Router = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
        <Route path="/" exact component={AsynHome} />
        <Route path="/Login" exact component={AsyncLogin} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
