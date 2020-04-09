import * as Action from "../constant";
const initState = {
  counter: 0,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
