import React from "react";

import {
  Input,
  Textarea,
  Select,
  Button,
  Dropdown,
  Checkbox,
} from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import Navbar from "../Dashboard/Navbar";

const NewArticleForm = ({
  setArticleTitle,
  setArticleCategory,
  setArticleBody,
  setArticlePublished,
  categoryList,
  articlePublished,
  handleSubmit,
  errors,
}) => {
  return (
    <div>
      <Navbar />
      <div className="flex-col w-2/4 mx-auto mt-20">
        <div className="flex">
          <Input
            error={errors.input}
            className="mr-4"
            label="Article Title"
            placeholder="Enter Title"
            onChange={event => setArticleTitle(event.target.value)}
          />

          <Select
            error={errors.Select}
            isClearable
            label="Select"
            name="ValueList"
            onChange={event => {
              Logger.warn("selected category", event.value);
              setArticleCategory(event.value);
            }}
            options={categoryList?.map(category => ({
              label: category.name,
              value: category.id,
            }))}
            placeholder="Select an Option"
            size="small"
          />
        </div>
        <Textarea
          error={errors.textarea}
          className="mt-4"
          label="Article Body"
          placeholder="Enter text"
          onChange={e => setArticleBody(e.target.value)}
          rows={40}
        />
        <div className="flex mt-2">
          <Button
            className="bg-indigo-500"
            label={articlePublished ? "Published" : "SaveDraft"}
            onClick={() => handleSubmit()}
          />
          <Dropdown
            closeOnSelect={false}
            autoWidth={false}
            buttonStyle="bg-indigo-500"
            className="bg-indigo-500 text-white"
            position="bottom-end"
          >
            <li>
              <Checkbox
                id="checkbox_name"
                label="Published"
                onClick={event =>
                  event.target.checked
                    ? setArticlePublished(1)
                    : setArticlePublished(0)
                }
              />
            </li>
          </Dropdown>
          <Button className="ml-1" label="Cancel" style="text" to="/" />
        </div>
      </div>
    </div>
  );
};

export default NewArticleForm;
