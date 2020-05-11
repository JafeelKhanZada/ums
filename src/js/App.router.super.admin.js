import React from "react";
import Loadable from "react-loadable";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "./util/Sidebar";
const AsynHome = Loadable({
  loader: () => import("./components/Super Admin/Home"),
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
const AsyncTeacher = Loadable({
  loader: () => import("./components/Super Admin/Teacher/AddTeacher/"),
  loading: () => <div>Loading......</div>,
});
const AsyncTeacherView = Loadable({
  loader: () => import("./components/Super Admin/Teacher/View"),
  loading: () => <div>Loading......</div>,
});
const AsyncAdmin = Loadable({
  loader: () => import("./components/Super Admin/Admin/AddAdmin"),
  loading: () => <div>Loading......</div>,
});

const Router = () => {
  const { auth } = useSelector(({ Authentication }) => Authentication);

  return (
    <>
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
            path="/Add-Student"
            render={() =>
              auth === true ? <AsyncStudent /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/View-Student"
            render={() =>
              auth === true ? <AsyncViewStudent /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/Add-Employee"
            render={() =>
              auth === true ? <AsyncEmployee /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/View-Employee"
            render={() =>
              auth === true ? <AsyncViewEmployee /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/Add-Department"
            render={() =>
              auth === true ? <AsyncDepartment /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/View-Department"
            render={() =>
              auth === true ? <AsyncViewDepartment /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/Add-Batch"
            render={() =>
              auth === true ? <AsyncBatch /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/View-Batch"
            render={() =>
              auth === true ? <AsyncViewBatch /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/View-Course"
            render={() =>
              auth === true ? <AsyncViewCourses /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/Add-Course"
            render={() =>
              auth === true ? <AsyncCourse /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/Add-Teacher"
            render={() =>
              auth === true ? <AsyncTeacher /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/View-Teacher"
            render={() =>
              auth === true ? <AsyncTeacherView /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/Add-Admin"
            render={() =>
              auth === true ? <AsyncAdmin /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </SideBar>
    </>
  );
};
export default Router;
