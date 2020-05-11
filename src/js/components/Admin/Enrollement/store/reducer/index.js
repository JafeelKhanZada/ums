import * as Action from "../action";
const initState = {
  table: [],
  semester: [],
  employee: [],
  department: [],
  section: [],
  course: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_SEMESTER: {
      return {
        ...state,
        semester: action.payload,
      };
    }
    case Action.GET_EMPLOYEE: {
      return {
        ...state,
        employee: action.payload,
      };
    }
    case Action.GET_DEPARTMENT: {
      return {
        ...state,
        department: action.payload,
      };
    }
    case Action.GET_SECTION: {
      return {
        ...state,
        section: action.payload,
      };
    }
    case Action.GET_COURSE: {
      return {
        ...state,
        course: action.payload,
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
