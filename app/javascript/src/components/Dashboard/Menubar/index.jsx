import React, { useState, useEffect } from "react";

import { Search, Plus, Check, Close } from "@bigbinary/neeto-icons";
import { Typography, Input } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";
import Logger from "js-logger";
import { toast } from "react-toastify";

import categoryApi from "../../../apis/category";
import { TOASTR_OPTIONS } from "../../../constants";

const Menubar = ({
  setSelectedStatus,
  setSelectedCategory,
  categoryCount,
  selectedStatus,
  selectedCategory,
}) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isInputCollapsed, setIsInputCollapsed] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const articleStatus = ["All", "Draft", "Published"];

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

  const handleSubmit = async () => {
    try {
      if (newCategory.length !== 0) {
        await categoryApi.create({ name: newCategory });
        ListCategories();
      } else toast.error("Category name can't be blank.", TOASTR_OPTIONS);
    } catch (error) {
      Logger.error(error);
    }
  };

  return (
    <div className="flex">
      <MenuBar showMenu={true} title="Article">
        {articleStatus.map((status, index) => (
          <MenuBar.Block
            label={status}
            count={categoryCount[index]}
            key={index}
            active={status === selectedStatus}
            onClick={() => {
              status === selectedStatus
                ? setSelectedStatus("All")
                : setSelectedStatus(status);
            }}
          />
        ))}

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => {
                setIsSearchCollapsed(!isSearchCollapsed);
                setIsInputCollapsed(false);
              },
            },
            {
              icon: isInputCollapsed ? Close : Plus,
              onClick: () => {
                setIsInputCollapsed(!isInputCollapsed);
                setIsSearchCollapsed(true);
              },
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            CATEGORIES
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => {
            setIsSearchCollapsed(true);
            setSearchCategory("");
          }}
          onChange={e => setSearchCategory(e.target.value)}
        />

        {isInputCollapsed && (
          <div className="flex float-none items-center">
            <Input
              className=" mb-2"
              placeholder="Enter Name"
              onChange={e => setNewCategory(e.target.value)}
              suffix={
                <Check
                  size={20}
                  onClick={() => {
                    setIsInputCollapsed(!isInputCollapsed);
                    handleSubmit();
                    setNewCategory("");
                  }}
                />
              }
            />
          </div>
        )}
        {categoryList
          ?.filter(category =>
            category.name.toLowerCase().includes(searchCategory.toLowerCase())
          )
          .map((category, index) => (
            <MenuBar.Block
              label={category.name}
              key={index}
              count={category.count}
              active={category.name === selectedCategory}
              onClick={() => {
                category.name === selectedCategory
                  ? setSelectedCategory(null)
                  : setSelectedCategory(category.name);
              }}
            />
          ))}
      </MenuBar>
    </div>
  );
};

export default Menubar;
