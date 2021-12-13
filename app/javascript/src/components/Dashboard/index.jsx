import React, { useState, useEffect } from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import articleApi from "apis/article";

import ArticleTable from "./ArticleTable";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Subheading from "./Subheading";

const Dashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryCount, setCategoryCount] = useState([]);
  const [searchedArticle, setSearchedArticle] = useState("");
  const [rowCount, setRowCount] = useState();
  const [tableColumn, setTableColumn] = useState([
    "Title",
    "Date",
    "Author",
    "Category",
    "Status",
  ]);
  const [articleData, setArticleData] = useState([]);

  const [loading, setLoading] = useState(true);

  const ListArticles = async () => {
    try {
      setLoading(true);
      const response = await articleApi.index();

      setArticleData(response.data.articleData);
      const allStatusCount = response.data.draft + response.data.published;
      const draftStatustCount = response.data.draft;
      const publishedStatusCount = response.data.published;
      setLoading(false);
      setCategoryCount([
        allStatusCount,
        draftStatustCount,
        publishedStatusCount,
      ]);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    ListArticles();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar className="overflow-y-hidden" />
      <div className="flex flex-auto overflow-y-hidden">
        <Menubar
          selectedStatus={selectedStatus}
          selectedCategory={selectedCategory}
          setSelectedStatus={setSelectedStatus}
          setSelectedCategory={setSelectedCategory}
          categoryCount={categoryCount}
          ListArticles={ListArticles}
        />
        <div className="m-8 overflow-auto flex-col ">
          <Subheading
            tableColumn={tableColumn}
            setTableColumn={setTableColumn}
            setSearchedArticle={setSearchedArticle}
          />
          <Typography style="h4" className="mt-4 mb-4">
            {rowCount} Articles
          </Typography>
          <ArticleTable
            selectedStatus={selectedStatus}
            selectedCategory={selectedCategory}
            tableColumn={tableColumn}
            searchedArticle={searchedArticle}
            setRowCount={setRowCount}
            ListArticles={ListArticles}
            loading={loading}
            articleData={articleData}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
