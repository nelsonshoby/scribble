import React from "react";

import Main from "./Main";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Subheading from "./Subheading";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Menubar />
        <div className="m-8 overflow-auto ">
          <Subheading />
          <Main className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
