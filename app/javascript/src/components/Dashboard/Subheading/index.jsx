import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Input, Dropdown, Button, Checkbox } from "@bigbinary/neetoui/v2";

const Subheading = ({ tableColumn, setTableColumn, setSearchedArticle }) => {
  const handleChange = (event, option) => {
    !event.target.checked
      ? setTableColumn(tableColumn.filter(column => column !== option))
      : setTableColumn([...tableColumn, option]);
  };

  const columnNames = ["Title", "Date", "Author", "Category", "Status"];
  return (
    <div className="flex  justify-end">
      <div className="flex ">
        <Input
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
          onClose={function noRefCheck() {}}
          position="bottom-end"
        >
          {columnNames.map((option, index) => (
            <li key={index}>
              <Checkbox
                checked={tableColumn.includes(option)}
                id={option}
                label={option}
                onChange={event => handleChange(event, option)}
              />
            </li>
          ))}
        </Dropdown>

        <Button
          label="Add New Article"
          size="large"
          className="ml-2 bg-indigo-500"
          icon={Plus}
        />
      </div>
    </div>
  );
};

export default Subheading;
