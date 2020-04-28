import axios from "axios";
// const POST_DEPARTMENT_IN_DEPARTMENT = "[UMS] POST DEPARTMENT [DEPARTMENT]";
export const GET_PROGRAM = "[UMS] GET PROGRAM [DEPARTMENT]";
export const postBatchInBatch = (payload) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:4000/api/batch/insert", payload)
      .then((res) => {
        console.log(res);
        if (!res.data.error) return true;
        else return false;
      });
  };
};
export const getDepartment = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 10000,
      id: id || null,
    };
    return axios
      .post("http://localhost:4000/api/program/getData", obj)
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: GET_PROGRAM,
            payload: res.data.data,
          });
        }
      });
  };
};
