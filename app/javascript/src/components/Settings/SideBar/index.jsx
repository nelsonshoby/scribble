import React from "react";

import { Settings, Repeat, Seo } from "@bigbinary/neeto-icons";

import SideBarSubComponent from "./SideBarSubComponent";

const SideBar = () => {
  const tags = [Settings, Repeat, Seo];
  const heading = ["General", "Redirections", "Manage categories"];
  const subHeading = [
    "Page Title, Brand Name & Meta Description",
    "Create & configure redirection rules",
    "Edit and Reorder KB Structure",
  ];

  return (
    <div className="max-w-sm max-h-full border-r-2">
      {tags.map((Icon, index) => (
        <div key={index}>
          <SideBarSubComponent
            key={index}
            Tag={Icon}
            Heading={heading[index]}
            SubHeading={subHeading[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
