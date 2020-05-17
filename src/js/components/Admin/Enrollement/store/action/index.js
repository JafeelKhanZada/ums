import axios from "axios";
export const GET_SEMESTER = "[UMS] GET SEMESTER [ADMIN]";
export const GET_EMPLOYEE = "[UMS] GET EMPLOYEE";
export const GET_DEPARTMENT = "[UMS] GET DEPARTMENT";
export const GET_SECTION = "[UMS] GET SEMESTER";
export const GET_COURSE = "[UMS] GET COURSE";
export const getEmployee = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 1000,
      id: id || null,
    };
    return axios
      .post("/api/teachers/GetTeacher", obj)
      .then((res) => {
        if (!res.data.error) {
          return dispatch({
            type: GET_EMPLOYEE,
            payload: res.data.data,
          });
        }
      });
  };
};
export const getSemester = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 1000,
      id: id || null,
    };
    return axios
      .post("/api/samester/GetSamester", obj)
      .then((res) => {
        if (!res.data.error) {
          return dispatch({
            type: GET_SEMESTER,
            payload: res.data.data,
          });
        }
      });
  };
};
export const getSection = (id) => {
  return (dispatch) => {
    return axios
      .get(`/api/samester/getSemesterBySectionId/${id}`)
      .then((res) => {
        console.log(res, id);
        if (!res.data.error) {
          return dispatch({
            type: GET_SECTION,
            payload: res.data.data,
          });
        }
      });
  };
};
export const addAdmin = (payload) => {
  return (dispatch) => {
    return axios
      .post("/api/admin/insert", payload)
      .then((res) => {
        return !res.data.error;
      });
  };
};
export const getCourse = () => {
  return (dispatch) => {
    let obj = {
      page: 1,
      pageSizes: 1000,
      id: null,
    };
    return axios
      .post("/api/courses/GetCourse", obj)
      .then((res) => {
        if (!res.data.error) {
          return dispatch({
            type: GET_COURSE,
            payload: res.data.data,
          });
        }
      });
  };
};
