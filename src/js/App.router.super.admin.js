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
const AsyncViewStudent = Loadable({
  loader: () => import("./components/Super Admin/Student/View"),
  loading: () => <div>Loading......</div>,
});
const AsyncEmployee = Loadable({
  loader: () => import("./components/Super Admin/Employee/AddEmployee"),
  loading: () => <div>Loading......</div>,
});
const AsyncViewEmployee = Loadable({
  loader: () => import("./components/Super Admin/Employee/View"),
  loading: () => <div>Loading......</div>,
});
const AsyncDepartment = Loadable({
  loader: () => import("./components/Super Admin/Department/AddDepartment"),
  loading: () => <div>Loading......</div>,
});
const AsyncViewDepartment = Loadable({
  loader: () => import("./components/Super Admin/Department/View"),
  loading: () => <div>Loading......</div>,
});
const AsyncBatch = Loadable({
  loader: () => import("./components/Super Admin/Batch/AddBatch"),
  loading: () => <div>Loading......</div>,
});
const AsyncViewBatch = Loadable({
  loader: () => import("./components/Super Admin/Batch/View"),
  loading: () => <div>Loading......</div>,
});
const AsyncViewCourses = Loadable({
  loader: () => import("./components/Super Admin/Courses/View"),
  loading: () => <div>Loading......</div>,
});
const AsyncCourse = Loadable({
  loader: () => import("./components/Super Admin/Courses/AddCourse/"),
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
          <Route
            path="/View-Student"
            render={() =>
              auth === true ? (
                <AsyncViewStudent />
              ) : (
                <Redirect to="/View-Student" />
              )
            }
          />
          <Route
            path="/Add-Employee"
            render={() =>
              auth === true ? (
                <AsyncEmployee />
              ) : (
                <Redirect to="/Add-Employee" />
              )
            }
          />
          <Route
            path="/View-Employee"
            render={() =>
              auth === true ? (
                <AsyncViewEmployee />
              ) : (
                <Redirect to="/View-Employee" />
              )
            }
          />
          <Route
            path="/Add-Department"
            render={() =>
              auth === true ? (
                <AsyncDepartment />
              ) : (
                <Redirect to="/Add-Department" />
              )
            }
          />
          <Route
            path="/View-Department"
            render={() =>
              auth === true ? (
                <AsyncViewDepartment />
              ) : (
                <Redirect to="/View-Department" />
              )
            }
          />
          <Route
            path="/Add-Batch"
            render={() =>
              auth === true ? <AsyncBatch /> : <Redirect to="/Add-Batch" />
            }
          />
          <Route
            path="/View-Batch"
            render={() =>
              auth === true ? <AsyncViewBatch /> : <Redirect to="/View-Batch" />
            }
          />
          <Route
            path="/View-Course"
            render={() =>
              auth === true ? (
                <AsyncViewCourses />
              ) : (
                <Redirect to="/View-Course" />
              )
            }
          />
          <Route
            path="/Add-Course"
            render={() =>
              auth === true ? <AsyncCourse /> : <Redirect to="/Add-Course" />
            }
          />
        </Switch>
      </SideBar>
    </BrowserRouter>
  );
};
export default Router;
