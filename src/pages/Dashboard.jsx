 import React from "react";
import Sidebar from "../Dashbord/layout/Sidebar/Sidebar";
import Content from "../Dashbord/layout/Content/Content";
import Navbar from "../Components/Navbar"

const Dashboard = () => {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;