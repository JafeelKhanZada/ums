import axios from "axios";
// const POST_DEPARTMENT_IN_DEPARTMENT = "[UMS] POST DEPARTMENT [DEPARTMENT]";
export const GET_BATCH = "[UMS] GET BATCH [STUDENT]";
export const getBatch = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 10,
      id: id || null,
    };
    return axios
      .post("http://localhost:4000/api/batch/getBatch", obj)
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: GET_BATCH,
            payload: res.data.data,
          });
        }
      });
  };
};
export const postStudentInfo = (payload) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:4000/api/student_info/insert", payload)
      .then((res) => {
        console.log(res);
        if (!res.data.error) return true;
        else return false;
      });
  };
};
