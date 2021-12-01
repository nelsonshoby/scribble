import React, { useState, useEffect } from "react";

import { Search, Plus, Check, Close } from "@bigbinary/neeto-icons";
import { Typography, Input } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";
import Logger from "js-logger";
import { toast } from "react-toastify";

import articleApi from "../../../apis/article";
import categoryApi from "../../../apis/category";
import { TOASTR_OPTIONS } from "../../../constants";

const Menubar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isInputCollapsed, setIsInputCollapsed] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [categoryCount, setCategoryCount] = useState([]);
  const articleStatus = ["All", "Draft", "Published"];

  const ListCategories = async () => {
    try {
      const response = await categoryApi.index();
      Logger.warn("response incategoty", response.data);
      setCategoryList(response.data.category);
    } catch (error) {
      Logger.error(error);
    }
  };

  const ListArticles = async () => {
    try {
      const response = await articleApi.index();
      Logger.warn("response", response);
      const allCount = response.data.draft + response.data.published;
      const draftCount = response.data.draft;
      const publishedCount = response.data.published;
      setCategoryCount([allCount, draftCount, publishedCount]);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    ListCategories();
  }, [newCategory]);

  useEffect(() => {
    ListArticles();
  }, []);

  const handleSubmit = async () => {
    try {
      if (newCategory.length !== 0) {
        await categoryApi.create({ name: newCategory });
      } else toast.error("Category name can't be blank.", TOASTR_OPTIONS);
    } catch (error) {
      Logger.error(error);
    }
  };

  return (
    <div className="flex">
      <MenuBar showMenu={true} title="Article">
        {articleStatus.map((ele, index) => (
          <MenuBar.Block label={ele} count={categoryCount[index]} key={index} />
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
            />
          ))}
      </MenuBar>
    </div>
  );
};

export default Menubar;
