import React from "react";

import Heading from "./Header";
import ShowArticle from "./ShowArticle";
import SideBar from "./SideBar";

const EndUserInterface = () => {
  return (
    <div className="flex flex-col h-screen">
      <Heading className="overflow-y-hidden" />
      <div className="flex flex-auto overflow-y-hidden">
        <SideBar />
        <div className="m-8">
          <ShowArticle />
        </div>
      </div>
    </div>
  );
};

export default EndUserInterface;
