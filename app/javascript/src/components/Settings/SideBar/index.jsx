import React from "react";

import { Settings, Repeat, Seo } from "@bigbinary/neeto-icons";

import SideBarSubComponent from "./SideBarSubComponent";

const SideBar = ({ setSelectedSettings }) => {
  const Tags = [Settings, Repeat, Seo];
  const Heading = ["General", "Redirections", "Manage categories"];
  const SubHeading = [
    " Page Title, Brand Name & Meta Description",
    "Create & configure redirection rules",
    "Edit and Reorder KB Structure",
  ];
  return (
    <div className="max-w-sm h-screen  fixed border-r-2">
      {Tags.map((Tag, index) => (
        <div key={index} onClick={() => setSelectedSettings(Heading[index])}>
          <SideBarSubComponent
            key={index}
            Tag={Tag}
            Heading={Heading[index]}
            SubHeading={SubHeading[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
