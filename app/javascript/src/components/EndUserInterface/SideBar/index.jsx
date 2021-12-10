import React, { useEffect, useState } from "react";

import { Accordion } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import categoryApi from "apis/category";

const SideBar = () => {
  const [categoryData, setCategoryData] = useState();
  useEffect(async () => {
    try {
      const response = await categoryApi.loadCategoryAndArticle();
      setCategoryData(response.data.category);
      Logger.warn("response in eui", response.data.category);
    } catch (error) {
      Logger.error(error);
    }
  }, []);
  return (
    <div className=" w-1/5 h-screen  border-r-2">
      <Accordion padded>
        {categoryData?.map((category, index) => (
          <Accordion.Item
            key={index}
            title={category.name}
            className="border-none text-gray-600 font-bold "
          >
            {category.article.map((article, index) => (
              <div key={index} className="ml-4 py-2 ">
                {article.title}
              </div>
            ))}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default SideBar;
