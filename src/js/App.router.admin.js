import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "./util/Sidebar";
// import Test from "./Test/CalendarViewWeekComponent";
const AsynHome = Loadable({
  loader: () => import("./components/Student/Home/Student"),
  loading: () => <div>Loading......</div>,
});
const AsynAddEnrollement = Loadable({
  loader: () => import("./components/Admin/Enrollement/AddEnrollement"),
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
            path="/Add-Enrollement"
            exact
            render={() =>
              auth === true ? <AsynAddEnrollement /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </SideBar>
    </BrowserRouter>
  );
};
export default Router;
