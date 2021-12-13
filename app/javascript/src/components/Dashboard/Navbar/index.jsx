import React from "react";

import { ExternalLink } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleClick = () => {
    window.open(window.open("/preview"));
  };
  return (
    <div>
      <nav className="border-b-2 sticky  ">
        <div className="mx-6">
          <Header
            actionBlock={
              <Button
                size="large"
                className="mr-2"
                label="Preview"
                icon={ExternalLink}
                style="secondary"
                onClick={handleClick}
              />
            }
            title={
              <div className="flex text-xl ">
                <Typography style="h3" className="text-gray-800">
                  Scribble
                </Typography>
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-indigo-500 "
                  className="ml-4 text-gray-400"
                >
                  Articles
                </NavLink>
                <NavLink
                  to="/settings"
                  activeClassName="text-indigo-500 "
                  className="ml-4 text-gray-400"
                >
                  Settings
                </NavLink>
              </div>
            }
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
