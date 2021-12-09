import React, { useEffect, useState } from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Table, PageLoader } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import articleApi from "apis/article";

const ArticleTable = ({
  selectedStatus,
  selectedCategory,
  tableColumn,
  searchedArticle,
  setRowCount,
  ListArticles,
  loading,
  articleData,
}) => {
  const [filteredColumn, setFilteredColumn] = useState([]);

  const handleDelete = async id => {
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
        className: option === "Category" ? "w-150" : null,
      }))
    );
  };

  useEffect(() => {
    filterTableColumn();
  }, [tableColumn]);

  useEffect(
    () => [Logger.warn("filteredColumn", filteredColumn)],
    [filteredColumn]
  );

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
        className="even:bg-gray-100 cursor-auto "
        rowSelection={false}
        columnData={[
          ...filteredColumn,
          {
            render: rowData => (
              <div className="flex ">
                <Button
                  icon={Delete}
                  style="text"
                  onClick={() => handleDelete(rowData.id)}
                />
                <Button
                  icon={Edit}
                  style="text"
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
