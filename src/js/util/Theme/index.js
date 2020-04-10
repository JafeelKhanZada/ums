import { createMuiTheme } from "@material-ui/core/styles";
import LightProvider from "./light";
import DarkProvider from "./dark";
const Light = createMuiTheme(LightProvider);
const Dark = createMuiTheme(DarkProvider);
export { Light, Dark };
