import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import GeneralSettings from "./GeneralSettings";
import RedirectionSettings from "./RedirectionSettings";
import SideBar from "./SideBar";

import Navbar from "../Dashboard/Navbar";

const Settings = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar className="overflow-y-hidden" />
      <div className="flex flex-auto overflow-y-hidden">
        <SideBar />
        <Switch>
          <Redirect exact path="/settings" to="/settings/General" />
          <Route exact path="/settings/General" component={GeneralSettings} />
          <Route
            exact
            path="/settings/Redirections"
            component={RedirectionSettings}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Settings;
