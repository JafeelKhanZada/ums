import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const AsynHome = Loadable({
  loader: () => import("./components/Home/Home"),
  loading: () => <div>Loading......</div>
});
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AsynHome} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
