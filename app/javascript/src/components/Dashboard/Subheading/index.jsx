import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Input, Dropdown, Button, Checkbox } from "@bigbinary/neetoui/v2";

const Subheading = ({ tableColumn, setTableColumn, setSearchedArticle }) => {
  const handleChange = (event, option) => {
    if (!event.target.checked) {
      setTableColumn(tableColumn.filter(column => column !== option));
    } else {
      const columns = columnNames.filter(
        data => tableColumn.includes(data) || option === data
      );
      setTableColumn([...columns]);
    }
  };

  const columnNames = ["Title", "Date", "Author", "Category", "Status"];
  return (
    <div className="flex  justify-end">
      <div className="flex ">
        <Input
          className="w-305"
          prefix={<Search />}
          placeholder="Search article title"
          onChange={event => setSearchedArticle(event.target.value)}
        />

        <Dropdown
          closeOnSelect={false}
          className="ml-2 "
          buttonProps={{
            size: "large",
          }}
          buttonStyle="secondary"
          label="Columns"
          position="bottom-end"
        >
          <ul className="capitalize ml-3">
            <span className="font-bold text-gray-800 mt-11 pb-4 ml-4">
              Columns
            </span>
            {columnNames.map((option, index) => (
              <li key={index}>
                <Checkbox
                  checked={tableColumn.includes(option)}
                  id={option}
                  label={option}
                  onChange={event => handleChange(event, option)}
                  style={{ color: "#6366F1", borderRadius: "5px" }}
                />
              </li>
            ))}
          </ul>
        </Dropdown>

        <Button
          label="Add New Article"
          size="large"
          className="ml-2 bg-indigo-500"
          icon={Plus}
          to="/articles/new"
        />
      </div>
    </div>
  );
};

export default Subheading;
