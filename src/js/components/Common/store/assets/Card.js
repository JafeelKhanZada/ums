import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },
  container: {
    width: "100%",
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  innerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
  },
  textHead: {
    fontFamily: theme.palette.text.fontFamily,
    color: theme.palette.text.secondary,
    fontSize: 10,
  },
  textValue: {
    fontFamily: theme.palette.text.fontFamily,
    color: theme.palette.text.subHeading,
  },
  Icon: {
    width: 50,
    height: 50,
    backgroundColor: "#7764E4",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  footerText1: {
    fontFamily: theme.palette.text.fontFamily,
    color: theme.palette.attendance.success,
    marginRight: 20,
  },
}));
export default useStyle;
