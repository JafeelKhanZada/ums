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
    name: "Section", //Name of component display in sidebar
    url: "/section", //URL path of component
    icon: "flaticon-e-learning", //Icon name of component
    bool: false,
    iconStyle: {
      fontSize: 23,
      width: 40,
      marginRight: 5,
      marginLeft: -20,
    },
    children: [
      {
        name: "Add Section", //Name of component display in sidebar
        url: "/Add-Section", //URL path of component
        icon: "flaticon-add", //Icon name of component
        iconStyle: {
          fontSize: 20,
          marginRight: 5,
          width: 40,
          marginLeft: -20,
        },
      },
      {
        name: "View Section", //Name of component display in sidebar
        url: "/View-Section", //URL path of component
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
  {
    name: "Enrollement", //Name of component display in sidebar
    url: "/Enrollement", //URL path of component
    icon: "flaticon-web", //Icon name of component
    bool: false,
    iconStyle: {
      fontSize: 23,
      width: 40,
      marginRight: 5,
      marginLeft: -20,
    },
    children: [
      {
        name: "Add Enrollement", //Name of component display in sidebar
        url: "/Add-Enrollement", //URL path of component
        icon: "flaticon-add", //Icon name of component
        iconStyle: {
          fontSize: 20,
          marginRight: 5,
          width: 40,
          marginLeft: -20,
        },
      },
      {
        name: "View Enrollement", //Name of component display in sidebar
        url: "/View-Enrollement", //URL path of component
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
