import React, { useEffect, useState } from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Table, PageLoader } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import articleApi from "../../../apis/article";

const ArticleTable = ({
  selectedStatus,
  selectedCategory,
  setCategoryCount,
  tableColumn,
  searchedArticle,
  setRowCount,
}) => {
  const [articleData, setArticleData] = useState([]);
  const [filteredColumn, setFilteredColumn] = useState([]);
  const [loading, setLoading] = useState(true);

  const ListArticles = async () => {
    try {
      setLoading(true);
      const response = await articleApi.index();
      Logger.warn("response in article", response.data.articleData);
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

  const handleDelete = async id => {
    Logger.warn("delete id", id);
    if (confirm("Want to delete?")) {
      try {
        await articleApi.destroy(id);
        ListArticles();
      } catch (error) {
        Logger.error(error);
      }
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
    })
    .filter(article => {
      if (searchedArticle) {
        return article.title
          .toLowerCase()
          .includes(searchedArticle.toLowerCase());
      }

      return true;
    });
  setRowCount(RowData.length);
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-64">
        <PageLoader text="Loading..." />
      </div>
    );
  }

  return (
    <div className="h-full">
      <Table
        className="even:bg-gray-200 "
        rowSelection={false}
        columnData={[
          ...filteredColumn,
          {
            render: (_, rowData) => (
              <div className="flex ">
                <Delete
                  className="cursor-pointer "
                  size={20}
                  onClick={() => handleDelete(rowData.id)}
                />
                <Edit
                  size={20}
                  className="ml-2 cursor-pointer "
                  onClick={() =>
                    (window.location.href = `/articles/${rowData.id}/edit`)
                  }
                />
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
