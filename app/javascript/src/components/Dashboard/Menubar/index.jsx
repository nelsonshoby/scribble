import React, { useState } from "react";

import { Search, Plus, Check } from "@bigbinary/neeto-icons";
import { Typography, Input } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";
import Logger from "js-logger";
import { toast } from "react-toastify";

import categoryApi from "../../../apis/category";
import { TOASTR_OPTIONS } from "../../../constants";

const Menubar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isInputCollapsed, setIsInputCollapsed] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleSubmit = async () => {
    Logger.warn("submitted data", newCategory);
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
        <MenuBar.Block label="All" count={13} active />
        <MenuBar.Block label="Draft" count={2} />
        <MenuBar.Block label="Published" count={7} />

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
              icon: Plus,
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
          onCollapse={() => setIsSearchCollapsed(true)}
        />

        {isInputCollapsed && (
          <div className="flex float-none items-center">
            <Input
              className="mr-2 mb-2"
              placeholder="Enter Name"
              onChange={e => setNewCategory(e.target.value)}
            />
            <Check
              className="-mt-1"
              size={18}
              onClick={() => {
                setIsInputCollapsed(!isInputCollapsed);
                handleSubmit();
                setNewCategory("");
              }}
            />
          </div>
        )}

        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
      </MenuBar>
    </div>
  );
};

export default Menubar;
