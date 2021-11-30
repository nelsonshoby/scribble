import React, { useState, useEffect } from "react";

import { Search, Plus, Check } from "@bigbinary/neeto-icons";
import { Typography, Input } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

const Menubar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isInputCollapsed, setIsInputCollapsed] = useState(false);
  useEffect(() => {}, []);
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
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
            {
              icon: Plus,
              onClick: () => setIsInputCollapsed(!isInputCollapsed),
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
              label="Input"
              placeholder="Enter Name"
            />
            <Check
              className="mt-2"
              onClick={() => setIsInputCollapsed(!isInputCollapsed)}
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
