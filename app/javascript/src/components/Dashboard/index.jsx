import React, { useState } from "react";

import { Typography } from "@bigbinary/neetoui/v2";

import ArticleTable from "./ArticleTable";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Subheading from "./Subheading";

const Dashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryCount, setCategoryCount] = useState([]);
  const [tableColumn, setTableColumn] = useState([
    "Title",
    "Date",
    "Author",
    "Category",
    "Status",
  ]);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Menubar
          selectedStatus={selectedStatus}
          selectedCategory={selectedCategory}
          setSelectedStatus={setSelectedStatus}
          setSelectedCategory={setSelectedCategory}
          categoryCount={categoryCount}
        />
        <div className="m-8 overflow-auto flex-col ">
          <Subheading
            tableColumn={tableColumn}
            setTableColumn={setTableColumn}
          />
          <Typography style="h4" className="mt-4 mb-4">
            67 Articles
          </Typography>
          <ArticleTable
            selectedStatus={selectedStatus}
            selectedCategory={selectedCategory}
            setCategoryCount={setCategoryCount}
            tableColumn={tableColumn}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
