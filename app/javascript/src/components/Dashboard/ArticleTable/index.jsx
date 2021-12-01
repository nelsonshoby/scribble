import React, { useEffect, useState } from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Table } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import articleApi from "../../../apis/article";

const ArticleTable = () => {
  const [articleData, setArticleData] = useState([]);

  const ListArticles = async () => {
    try {
      const response = await articleApi.index();
      Logger.warn("response in article", response.data.articleData);
      setArticleData(response.data.articleData);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    ListArticles();
  }, []);

  return (
    <div className="h-full">
      <Table
        className="even:bg-gray-200 "
        rowSelection={false}
        columnData={[
          {
            dataIndex: "title",
            key: "title",
            title: "TITLE",
          },
          {
            dataIndex: "date",
            key: "date",
            title: "DATE",
          },
          {
            dataIndex: "author",
            key: "author",
            title: "AUTHOR",
          },
          {
            dataIndex: "category",
            key: "category",
            title: "CATEGORY",
          },
          {
            dataIndex: "status",
            key: "status",
            title: "STATUS",
          },
          {
            render: () => (
              <div className="flex ">
                <Delete size={20} />
                <Edit size={20} className="ml-2" />
              </div>
            ),
          },
        ]}
        rowData={articleData}
      ></Table>
    </div>
  );
};

export default ArticleTable;
