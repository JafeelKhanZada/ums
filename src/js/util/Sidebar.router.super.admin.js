import React from "react";
const SideBar = [
  {
    name: "Home", //Name of component display in sidebar
    url: "/Home", //URL path of component
    icon: "flaticon-real-estate", //Icon name of component
    iconStyle: {
      fontSize: 20,
      marginRight: 5,
      width: 40,
      marginLeft: -20,
    },
  },
  {
    name: "Students", //Name of component display in sidebar
    url: false, //URL path of component
    icon: "flaticon-student", //Icon name of component
    iconStyle: {
      fontSize: 20,
      marginRight: 5,
      width: 40,
      marginLeft: -20,
    },
    children: [
      {
        name: "Add Student", //Name of component display in sidebar
        url: "/Add-Student", //URL path of component
        icon: "flaticon-add", //Icon name of component
        iconStyle: {
          fontSize: 20,
          marginRight: 5,
          width: 40,
          marginLeft: -20,
        },
      },
      {
        name: "View Student", //Name of component display in sidebar
        url: "/View-Student", //URL path of component
        icon: "flaticon-eye", //Icon name of component
        iconStyle: {
          fontSize: 20,
          marginRight: 5,
          width: 40,
          marginLeft: -20,
        },
      },
    ],
  },
];
export default SideBar;
