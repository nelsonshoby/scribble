import React from "react";

import { ExternalLink } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

const Navbar = () => {
  return (
    <div>
      <div className="border-b-2">
        <div className="mx-6">
          <Header
            actionBlock={<Button label="Preview" icon={ExternalLink} />}
            title={
              <div className="flex ">
                <div>
                  <Typography style="h3" className="text-gray-800">
                    Scribble
                  </Typography>
                </div>
                <div>
                  <Typography style="h3" className="ml-4 text-indigo-500">
                    Article
                  </Typography>
                </div>
                <div>
                  <Typography style="h3" className="ml-4 text-gray-400">
                    Settings
                  </Typography>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
