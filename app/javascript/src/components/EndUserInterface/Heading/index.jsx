import React, { useEffect, useState } from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import sitedetailApi from "../../../apis/sitedetail";

const Heading = () => {
  const [siteName, setSiteName] = useState();
  const ShowSiteDetails = async () => {
    try {
      const response = await sitedetailApi.show();

      setSiteName(response.data.extract.name);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    ShowSiteDetails();
  }, []);
  return (
    <div className="h-56 w-full flex justify-center items-center border-b-2">
      <Typography style="h4">{siteName}</Typography>
    </div>
  );
};

export default Heading;
