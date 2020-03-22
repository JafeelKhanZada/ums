import { combineReducers } from "redux";
const Authentication = (state = true, action) => {
  switch (action.type) {
    default: {
      return {
        ...state
      };
    }
  }
};
const CreateReducer = asyncreducers => {
  return combineReducers({
    Auth: Authentication,
    ...asyncreducers
  });
};
export default CreateReducer;
