import React from "react";

import {
  Input,
  Textarea,
  Select,
  Button,
  Dropdown,
  Checkbox,
} from "@bigbinary/neetoui/v2";

import Navbar from "../Dashboard/Navbar";

const NewArticle = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-col w-2/4 mx-auto mt-20">
        <div className="flex">
          <Input
            className="mr-4"
            label="Article Title"
            placeholder="Enter Title"
          />

          <Select
            defaultValue={{
              label: "Value One",
              value: "value1",
            }}
            isClearable
            isSearchable
            label="Select"
            name="ValueList"
            options={[
              {
                label: "Value One",
                value: "value1",
              },
              {
                label: "Value Two",
                value: "value2",
              },
            ]}
            placeholder="Select an Option"
            size="small"
          />
        </div>
        <Textarea
          className="mt-4"
          label="Article Body"
          placeholder="Enter text"
          rows={40}
        />
        <div className="flex mt-2">
          <Button
            className="bg-indigo-500"
            label="Button"
            onClick={function noRefCheck() {}}
          />
          <Dropdown
            buttonProps={{
              onClick: function noRefCheck() {},
            }}
            closeOnSelect={false}
            autoWidth="false"
            buttonStyle="bg-indigo-500"
            className="bg-indigo-500 text-white"
            onClose={function noRefCheck() {}}
            position="bottom-end"
          >
            <li>
              <Checkbox id="checkbox_name" label="Published" />
            </li>
          </Dropdown>
          <Button
            className="ml-1"
            label="Cancel"
            onClick={function noRefCheck() {}}
            style="text"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
