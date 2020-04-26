import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: 20,
  },
  Heading: {
    fontFamily: theme.palette.text.fontFamily,
    color: "white",
    fontWeight: 600,
    marginTop: 20,
    paddingLeft: theme.spacing(4),
  },
}));
export default useStyle;
