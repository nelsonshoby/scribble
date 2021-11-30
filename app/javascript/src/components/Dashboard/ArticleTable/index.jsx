import React from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Table } from "@bigbinary/neetoui/v2";

const ArticleTable = () => {
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
        rowData={[
          {
            title: "Hello",
            date: "3/4/5",
            author: "Nelson",
            category: "Misc",
            status: "Published",
          },
          {
            title: "Hai",
            date: "3/4/5",
            author: "Arun",
            category: "Misc",
            status: "Published",
          },
          {
            title: "Morning",
            date: "3/4/5",
            author: "Sanal",
            category: "Security & Privacy",
            status: "Draft",
          },
        ]}
      ></Table>
    </div>
  );
};

export default ArticleTable;
