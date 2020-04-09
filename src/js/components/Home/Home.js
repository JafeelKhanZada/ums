import React from "react";
import Reducer from "./store/reducer";
import { withReducer } from "../../redux/withReducer";
function Home() {
  return <React.Fragment></React.Fragment>;
}
export default withReducer("Home", Reducer)(Home);
