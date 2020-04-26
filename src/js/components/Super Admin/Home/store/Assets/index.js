import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },

  Student_fee_heading: {
    paddingTop: theme.spacing(3),
    borderRadius: 12,
    overflow: "hidden",
  },
  Student_fee_heading_div: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  Student_fee_heading_div_typ1: {
    color: "#8898AA",
    fontSize: 9,
  },
  Student_fee_heading_div_typ2: {
    fontWeight: 700,
    fontFamily: "Poppins",
  },
  Student_fee_second_div: {
    marginTop: 10,
    paddingTop: theme.spacing(1),
    borderRadius: 12,
    overflow: "hidden",
  },
  Student_fee_second_div_main_div: {
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  Student_fee_second_div_main_div_typo1: {
    color: "#8898AA",
    fontSize: 9,
  },
  Student_fee_second_div_main_div_typo2: {
    fontWeight: 700,
    fontFamily: "Poppins",
  },
  Student_fee_second_div_main_div_content1_h: {
    fontWeight: 700,
    color: "#8898AA",
    fontFamily: "Poppins",
    marginLeft: 10,
  },
  Student_fee_second_div_main_div_content1_p: {
    fontWeight: 600,
    color: theme.palette.attendance.danger,
    fontFamily: "Poppins",
    marginLeft: 20,
    fontSize: 12,
  },
  Student_fee_second_div_main_div_content2_h: {
    fontWeight: 700,
    color: "#8898AA",
    fontFamily: "Poppins",
    marginLeft: 10,
  },
  Student_fee_second_div_main_div_content2_p: {
    fontWeight: 600,
    color: theme.palette.attendance.danger,
    fontFamily: "Poppins",
    marginLeft: 20,
    fontSize: 12,
  },
  Attendance_paper: {
    padding: theme.spacing(3),
    borderRadius: 12,
  },
  Attendance_paper_div: {
    paddingBottom: theme.spacing(3),
  },
  Attendance_paper_heading1: {
    color: "#8898AA",
    fontSize: 9,
  },
  Attendance_paper_heading2: {
    fontWeight: 700,
    fontFamily: "Poppins",
  },
  Attendance_Second_div: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  Attendance_Second_div_Align_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  Attendance_Second_div_Color_div: {
    width: 20,
    height: 10,
    borderRadius: 5,
  },
  Attendance_Second_div_Color_div_p: {
    fontFamily: theme.palette.text.fontFamily,
    marginLeft: 10,
    color: theme.palette.text.subHead,
    letterSpacing: 1,
  },
  Todolist_Grid: {
    padding: theme.spacing(2),
    paddingRight: 0,
    paddingTop: 0,
    borderRight: 10,
    marginTop: 20,
  },
  Todo2list_Paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  Todolist_Heading: {
    padding: theme.spacing(2),
    borderRadius: 12,
  },
  Todolist_Content: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderLeft: 3,
    borderLeftStyle: "solid",
    marginBottom: theme.spacing(2),
  },
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  Inner: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  InnerContent: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  bullet: {
    width: 12,
    height: 12,
    backgroundColor: "black",
    borderRadius: "50%",
  },
}));
export default useStyle;
