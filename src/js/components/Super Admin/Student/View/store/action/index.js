import axios from "axios";
export const GET_TABLE_DATA = "[UMS] GET TABLE DATA [STUDENT]";
export const getStudent = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 10,
      id: id || null,
    };
    return axios
      .post("/api/student_info/getData", obj)
      .then((res) => {
        if (!res.data.error) {
          return dispatch({
            type: GET_TABLE_DATA,
            payload: {
              table: res.data.data,
              size: res.data.totalPage,
            },
          });
        }
      });
  };
};
