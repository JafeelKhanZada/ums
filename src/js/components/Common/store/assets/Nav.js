import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: theme.spacing(4),
  },

  leftItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "centers",
  },
  profile: {
    display: "flex",
    alignItems: "center",
  },
  dp: {
    width: 40,
    marginRight: 10,
  },
  text: {
    fontFamily: theme.palette.text.fontFamily,
    color: "white",
    fontSize: 12,
    fontWeight: 500,
  },

  inputContainer: {
    width: 230,
    backgroundColor: "#F7FAFC",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 17,
    paddingLeft: 17,
    borderRadius: 20,
    fontFamily: theme.palette.text.fontFamily,
    fontSize: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  icon: {
    width: 17,
  },
}));
export default useStyle;
