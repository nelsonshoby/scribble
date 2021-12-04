import React, { useState } from "react";

import Logger from "js-logger";

import SideBar from "./SideBar";

import Navbar from "../Dashboard/Navbar";

const Settings = () => {
  const [selectedSettings, setSelectedSettings] = useState();
  Logger.warn(selectedSettings);
  return (
    <div>
      <Navbar />
      <SideBar setSelectedSettings={setSelectedSettings} />
    </div>
  );
};

export default Settings;
