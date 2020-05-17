import axios from "axios";
export const GET_ALL_TABLE_DATA_IN_BATCH = "[UMS] GET ALL DATA [BATCH]";
export const TOGGLE_LOADER_IN_BATCH = "[UMS] TOGGLE LOADER [BATCH]";
export const toggleLoaderInDepartment = () => {
  return {
    type: TOGGLE_LOADER_IN_BATCH,
  };
};
export const getBatch = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 10,
      id: id || null,
    };
    return axios
      .post("/api/batch/getBatch", obj)
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: GET_ALL_TABLE_DATA_IN_BATCH,
            payload: res.data.data,
          });
        }
      });
  };
};
