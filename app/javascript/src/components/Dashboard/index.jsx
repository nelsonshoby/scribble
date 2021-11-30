import React from "react";

import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Subheading from "./Subheading";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Menubar />
        <div className="m-4">
          <Subheading />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
