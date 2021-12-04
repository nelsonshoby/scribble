import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

const SideBarSubComponent = ({ Tag, Heading, SubHeading }) => {
  return (
    <div className="w-full">
      <div className="p-4  mx-4 my-8 hover: custom-bg">
        <div className="flex">
          <div className="flex items-center">
            <Tag className="mr-2" />
          </div>
          <div className="flex-col">
            <Typography style="h5">{Heading}</Typography>
            <Typography style="body3">{SubHeading}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarSubComponent;
