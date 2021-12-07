import React, { useEffect, useState } from "react";

import {
  Plus,
  Reorder,
  Edit,
  Delete,
  Check,
  Close,
} from "@bigbinary/neeto-icons";
import { Typography, Button, Input } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import categoryApi from "../../../apis/category";

const ManageCategories = () => {
  const [categoryList, setCategoryList] = useState();
  const [editableId, setEditableId] = useState();
  const [name, setName] = useState("");

  const handleDelete = () => {};
  const handleUpdate = () => {};

  const ListCategories = async () => {
    try {
      const response = await categoryApi.index();
      Logger.warn("response in cat", response.data.category);
      setCategoryList(response.data.category);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    ListCategories();
  }, []);
  return (
    <div className="mx-auto">
      <div className="w-720 mt-4">
        <Typography style="h2">Manage Categories</Typography>
        <Typography style="body1" className="text-gray-600 mt-2">
          Create and configure the categories inside your scribble.
        </Typography>

        <Button
          label="Add New Category"
          className="my-4 "
          icon={Plus}
          style="link"
          iconPosition="left"
        />
        <div className="w-641 border-t-2">
          <ul>
            {categoryList?.map(category =>
              editableId !== category.id ? (
                <li className="flex justify-between  border-b-2 py-4 items-center">
                  <div className="flex  items-center w-2/4">
                    <Button icon={Reorder} style="text" className="mr-2" />
                    <Typography style="h5">{category.name}</Typography>
                  </div>
                  <div className="flex">
                    <Button
                      className="mr-2 "
                      icon={Edit}
                      style="text"
                      onClick={() => {
                        setEditableId(category.id);
                        setName(category.name);
                      }}
                    />
                    <Button
                      icon={Delete}
                      style="text"
                      onClick={() => handleDelete(category.id)}
                    />
                  </div>
                </li>
              ) : (
                <li className="flex justify-between  border-b-2 py-4 items-center">
                  <Input
                    value={name}
                    className="mr-8"
                    placeholder="Enter Name"
                    onChange={event => setName(event.target.value)}
                  />
                  <div className="flex">
                    <Button
                      className="mr-2 "
                      icon={Check}
                      style="text"
                      onClick={() => handleUpdate(editableId)}
                    />
                    <Button
                      icon={Close}
                      style="text"
                      onClick={() => setEditableId(null)}
                    />
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
