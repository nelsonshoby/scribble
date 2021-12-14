import React, { useEffect, useState } from "react";

import {
  Input,
  Textarea,
  Select,
  Button,
  Dropdown,
  Checkbox,
} from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import categoryApi from "apis/category";

import Navbar from "../Dashboard/Navbar";

const NewArticleForm = ({
  setArticleTitle,
  setArticleCategory,
  setArticleBody,
  setArticlePublished,
  articlePublished,
  handleSubmit,
  errors,
  articleTitle,
  articleCategory,
  articleBody,
  setSelectedCategoryId,
  setErrors,
}) => {
  const [categoryList, setCategoryList] = useState([]);
  const ListCategories = async () => {
    try {
      const response = await categoryApi.index();

      setCategoryList(response.data.category);
    } catch (error) {
      Logger.error(error);
    }
  };
  useEffect(() => {
    ListCategories();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex-col w-636 mx-auto mt-20">
        <div className="flex">
          <Input
            value={articleTitle}
            error={errors?.input}
            className="mr-4"
            label="Article Title"
            placeholder="Enter Title"
            onChange={event => {
              setArticleTitle(event.target.value);
              setErrors({ ...errors, input: "" });
            }}
          />

          <Select
            error={errors?.select}
            value={articleCategory}
            label="Select"
            name="ValueList"
            onChange={event => {
              setArticleCategory(event);
              setSelectedCategoryId(event.value);
              setErrors({ ...errors, select: "" });
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
          value={articleBody}
          error={errors?.textarea}
          className="mt-4"
          label="Article Body"
          placeholder="Enter text"
          onChange={e => {
            setArticleBody(e.target.value);
            setErrors({ ...errors, textarea: "" });
          }}
          rows={40}
        />
        <div className="flex mt-2">
          <Button
            className="bg-indigo-500 rounded"
            label={articlePublished ? "Publish" : "Save Draft"}
            onClick={() => handleSubmit()}
          />
          <Dropdown
            closeOnSelect={false}
            autoWidth={false}
            buttonStyle="bg-indigo-500"
            className="bg-indigo-500 text-white border-l-2 rounded"
            position="bottom-end"
          >
            <li>
              <Checkbox
                id="checkbox_name"
                checked={articlePublished}
                style={{ color: "#6366F1", borderRadius: "5px" }}
                label="Publish"
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
