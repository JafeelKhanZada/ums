import React from "react";
import { injectReducer } from "./store";
const withReducer = (key, reducer) => WrappedComponent => {
  const Extended = (props, context) => {
    injectReducer(key, reducer);
    return <WrappedComponent {...props} />;
  };
  return Extended;
};

export { withReducer };
