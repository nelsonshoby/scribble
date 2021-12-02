import React, { useEffect, useState } from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Table } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import articleApi from "../../../apis/article";

const ArticleTable = ({
  selectedStatus,
  selectedCategory,
  setCategoryCount,
  tableColumn,
}) => {
  const [articleData, setArticleData] = useState([]);
  const [filteredColumn, setFilteredColumn] = useState([]);

  const ListArticles = async () => {
    try {
      const response = await articleApi.index();
      Logger.warn("response in article", response.data.articleData);
      setArticleData(response.data.articleData);
      const allStatusCount = response.data.draft + response.data.published;
      const draftStatustCount = response.data.draft;
      const publishedStatusCount = response.data.published;
      setCategoryCount([
        allStatusCount,
        draftStatustCount,
        publishedStatusCount,
      ]);
    } catch (error) {
      Logger.error(error);
    }
  };

  const filterTableColumn = () => {
    setFilteredColumn(
      tableColumn.map(option => ({
        dataIndex: option.toLowerCase(),
        key: option.toLowerCase(),
        title: option.toUpperCase(),
      }))
    );
  };

  useEffect(() => {
    ListArticles();
  }, []);

  useEffect(() => {
    filterTableColumn();
  }, [tableColumn]);

  const RowData = articleData
    .filter(article => {
      if (selectedCategory) return selectedCategory === article.category;

      return true;
    })
    .filter(article => {
      if (selectedStatus !== "All") return selectedStatus === article.status;

      return true;
    });

  return (
    <div className="h-full">
      <Table
        className="even:bg-gray-200 "
        rowSelection={false}
        columnData={[
          ...filteredColumn,
          {
            render: () => (
              <div className="flex ">
                <Delete size={20} />
                <Edit size={20} className="ml-2" />
              </div>
            ),
          },
        ]}
        rowData={RowData}
      ></Table>
    </div>
  );
};

export default ArticleTable;
