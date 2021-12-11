import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import GeneralSettings from "./GeneralSettings";
import ManageCategories from "./ManageCategories";
import RedirectionSettings from "./RedirectionSettings";
import SideBar from "./SideBar";

import Navbar from "../Dashboard/Navbar";

const Settings = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-auto">
        <SideBar />
        <Switch>
          <Redirect exact path="/settings" to="/settings/General" />
          <Route exact path="/settings/General" component={GeneralSettings} />
          <Route
            exact
            path="/settings/Redirections"
            component={RedirectionSettings}
          />
          <Route
            exact
            path="/settings/Managecategories"
            component={ManageCategories}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Settings;
