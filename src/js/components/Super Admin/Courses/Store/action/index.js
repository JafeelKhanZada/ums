import axios from "axios";
// export const ADD_COURSE = "[UMS] ADD COURSE [COURSES]";
export const GET_COURSE = "[UMS] GET COURSE [COURSES]";
export const addCourse = (payload) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:4000/api/courses/InsertCourse", payload)
      .then((res) => {
        console.log(res);
        return !res.data.error;
      });
  };
};
export const getCourse = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 10,
      id: id || null,
    };
    return axios
      .post("http://localhost:4000/api/courses/GetCourse", obj)
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: GET_COURSE,
            payload: {
              table: res.data.data,
              size: res.data.totalPage,
            },
          });
        }
      });
  };
};
