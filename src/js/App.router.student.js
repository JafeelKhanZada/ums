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
const AsyncAttendance = Loadable({
  loader: () => import("./components/Student/Attendance"),
  loading: () => <div>Loading......</div>,
});
const AsyncAddDrop = Loadable({
  loader: () => import("./components/Student/AddCourse"),
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
            path="/attendance-detail"
            render={() =>
              auth === true ? <AsyncAttendance /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/add-drop-course"
            render={() =>
              auth === true ? <AsyncAddDrop /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </SideBar>
    </BrowserRouter>
  );
};
export default Router;
