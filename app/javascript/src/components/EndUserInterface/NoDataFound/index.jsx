import React from "react";

import NoData from "../../../Pictures/NoDATA.jpg";

const NoDataFound = () => {
  return (
    <div className="mx-auto mt-40">
      <img src={NoData} alt="picture" className="h-48" />
    </div>
  );
};

export default NoDataFound;
