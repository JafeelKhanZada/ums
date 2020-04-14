import { combineReducers } from "redux";
import Authentication from "./Login";
import Common from "./Common";
const CreateReducer = (asyncreducers) => {
  return combineReducers({
    Authentication,
    Common,
    ...asyncreducers,
  });
};
export default CreateReducer;
