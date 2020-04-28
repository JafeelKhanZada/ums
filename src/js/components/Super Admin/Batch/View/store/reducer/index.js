import * as Actions from "../action";
const initState = {
  table: [],
  loader: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.TOGGLE_LOADER_IN_BATCH: {
      return {
        ...state,
        loader: !state.loader,
      };
    }
    case Actions.GET_ALL_TABLE_DATA_IN_BATCH: {
      return {
        ...state,
        table: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
