import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Input, Dropdown, Button } from "@bigbinary/neetoui/v2";

const Subheading = () => {
  return (
    <div className="flex justify-end">
      <Input prefix={<Search />} placeholder="Search article title" />

      <Dropdown
        className="ml-2 "
        buttonProps={{
          size: "large",
        }}
        buttonStyle="secondary"
        label="Columns"
        onClose={function noRefCheck() {}}
        position="bottom-end"
      >
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </Dropdown>

      <Button
        label="Add New Article"
        size="large"
        className="ml-2 bg-indigo-500"
        icon={Plus}
      />
    </div>
  );
};

export default Subheading;
