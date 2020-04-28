import React from "react";
const SideBar = [
  {
    name: "Home", //Name of component display in sidebar
    url: "/Home", //URL path of component
    icon: "flaticon-real-estate", //Icon name of component
    bool: true,
    iconStyle: {
      fontSize: 20,
      marginRight: 5,
      width: 40,
      marginLeft: -20,
    },
  },
  {
    name: "Students", //Name of component display in sidebar
    url: "/students", //URL path of component
    icon: "flaticon-student", //Icon name of component
    bool: false,
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
  {
    name: "Employee", //Name of component display in sidebar
    url: "/emoloyee", //URL path of component
    icon: "flaticon-employee", //Icon name of component
    bool: false,
    iconStyle: {
      fontSize: 20,
      marginRight: 5,
      width: 40,
      marginLeft: -20,
    },
    children: [
      {
        name: "Add Employee", //Name of component display in sidebar
        url: "/Add-Employee", //URL path of component
        icon: "flaticon-add", //Icon name of component
        iconStyle: {
          fontSize: 20,
          marginRight: 5,
          width: 40,
          marginLeft: -20,
        },
      },
      {
        name: "View Employee", //Name of component display in sidebar
        url: "/View-Employee", //URL path of component
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
    name: "Department", //Name of component display in sidebar
    url: "/department", //URL path of component
    icon: "flaticon-department", //Icon name of component
    bool: false,
    iconStyle: {
      fontSize: 20,
      marginRight: 5,
      width: 40,
      marginLeft: -20,
    },
    children: [
      {
        name: "Add Department", //Name of component display in sidebar
        url: "/Add-Department", //URL path of component
        icon: "flaticon-add", //Icon name of component
        iconStyle: {
          fontSize: 20,
          marginRight: 5,
          width: 40,
          marginLeft: -20,
        },
      },
      {
        name: "View Department", //Name of component display in sidebar
        url: "/View-Department", //URL path of component
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
    name: "Batch", //Name of component display in sidebar
    url: "/batch", //URL path of component
    icon: "flaticon-team", //Icon name of component
    bool: false,
    iconStyle: {
      fontSize: 20,
      marginRight: 5,
      width: 40,
      marginLeft: -20,
    },
    children: [
      {
        name: "Add Batch", //Name of component display in sidebar
        url: "/Add-Batch", //URL path of component
        icon: "flaticon-add", //Icon name of component
        iconStyle: {
          fontSize: 20,
          marginRight: 5,
          width: 40,
          marginLeft: -20,
        },
      },
      {
        name: "View Batch", //Name of component display in sidebar
        url: "/View-Batch", //URL path of component
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
    name: "Course", //Name of component display in sidebar
    url: "/course", //URL path of component
    icon: "flaticon-graduation-cap", //Icon name of component
    bool: false,
    iconStyle: {
      fontSize: 20,
      marginRight: 5,
      width: 40,
      marginLeft: -20,
    },
    children: [
      {
        name: "Add Course", //Name of component display in sidebar
        url: "/Add-Course", //URL path of component
        icon: "flaticon-add", //Icon name of component
        iconStyle: {
          fontSize: 20,
          marginRight: 5,
          width: 40,
          marginLeft: -20,
        },
      },
      {
        name: "View Course", //Name of component display in sidebar
        url: "/View-Course", //URL path of component
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
