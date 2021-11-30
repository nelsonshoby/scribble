import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

import ArticleTable from "./ArticleTable";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Subheading from "./Subheading";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Menubar />
        <div className="m-8 overflow-auto flex-col ">
          <Subheading />
          <Typography style="h4" className="mt-4 mb-4">
            67 Articles{" "}
          </Typography>
          <ArticleTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
