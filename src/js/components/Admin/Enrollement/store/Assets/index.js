import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  formContainer: {
    width: "100%",
    padding: theme.spacing(6),
  },
  formControl: {
    width: "100%",
  },
  InputLabel: {
    // paddingLeft: theme.spacing(),
  },

  InputContainer: {
    width: "100%",
    fontFamily: theme.palette.text.fontFamily,
    fontSize: 12,
  },
  radio: {
    width: "100px",
    marginTop: theme.spacing(2),
    fontFamily: theme.palette.text.fontFamily,
  },
}));
export default useStyle;
