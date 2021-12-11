import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

const Heading = ({ siteName }) => {
  return (
    <div className="h-56 w-full flex justify-center items-center border-b-2">
      <Typography style="h4">{siteName}</Typography>
    </div>
  );
};

export default Heading;
