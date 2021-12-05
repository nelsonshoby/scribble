import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

const SideBarSubComponent = ({ Tag, Heading, SubHeading }) => {
  const header = Heading.replace(/ /g, "");
  return (
    <div className="w-full">
      <NavLink
        to={`/settings/${header}`}
        activeClassName="bg-gray-400"
        className="flex items-center py-3 px-3 m-3 rounded-sm"
      >
        <Tag className="mr-2" />
        <div className="flex-col">
          <Typography style="h5">{Heading}</Typography>
          <Typography style="body3">{SubHeading}</Typography>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBarSubComponent;
