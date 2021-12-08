import React, { useEffect, useState } from "react";

import { Plus, Reorder, Edit, Delete } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";
import { toast } from "react-toastify";

import EditAndCreateCategory from "./EditAndCreateCategory";

import categoryApi from "../../../apis/category";
import { TOASTR_OPTIONS } from "../../../constants";

const ManageCategories = () => {
  const [categoryList, setCategoryList] = useState();
  const [editableId, setEditableId] = useState();
  const [name, setName] = useState("");
  const [newCategory, setNewCategory] = useState(true);

  const handleUpdate = async id => {
    try {
      await categoryApi.update(
        {
          category: {
            name,
          },
        },
        id
      );
      ListCategories();
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (newCategory.length !== 0) {
        await categoryApi.create({ name });
        ListCategories();
      } else toast.error("Category name can't be blank.", TOASTR_OPTIONS);
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleDelete = async id => {
    Logger.warn("delete id", id);
    if (confirm("Want to delete?")) {
      try {
        await categoryApi.destroy(id);
        ListCategories();
      } catch (error) {
        Logger.error(error);
      }
    }
  };

  const ListCategories = async () => {
    try {
      const response = await categoryApi.index();
      Logger.warn("response in cat", response.data.category);
      setCategoryList(response.data.category);
      setEditableId(null);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    ListCategories();
  }, []);

  return (
    <div className="mx-auto overflow-scroll ">
      <div className="w-720 mt-4">
        <Typography style="h2">Manage Categories</Typography>
        <Typography style="body1" className="text-gray-600 mt-2">
          Create and configure the categories inside your scribble.
        </Typography>

        <div className="w-260">
          {newCategory ? (
            <Button
              label="Add New Category"
              className="my-4 "
              icon={Plus}
              style="link"
              iconPosition="left"
              onClick={() => {
                setNewCategory(false);
                setEditableId(null), setName(null);
              }}
            />
          ) : (
            <EditAndCreateCategory
              handleSubmit={handleSubmit}
              setEditableId={setEditableId}
              setName={setName}
              name={name}
              setNewCategory={setNewCategory}
            />
          )}
        </div>
        <div className="w-641">
          <ul>
            {categoryList?.map(category =>
              editableId !== category.id ? (
                <li className="flex justify-between  border-t py-4 items-center">
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
                        setNewCategory(true);
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
                <div className="border-t">
                  <EditAndCreateCategory
                    setEditableId={setEditableId}
                    handleSubmit={handleUpdate}
                    setName={setName}
                    name={name}
                    editableId={editableId}
                  />
                </div>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
