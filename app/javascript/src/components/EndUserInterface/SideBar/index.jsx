import React from "react";

import { Accordion } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

const SideBar = ({ categoryData }) => {
  return (
    <div className=" w-300 h-screen  border-r-2 font-semibold">
      <Accordion padded>
        {categoryData?.map((category, CategoryIndex) => (
          <Accordion.Item
            key={CategoryIndex}
            title={category.name}
            className="border-none text-gray-600 "
          >
            {category.articles.map((article, index) => (
              <NavLink
                className="ml-6 flex py-2 "
                key={index}
                to={`/preview/${article.slug}`}
                activeClassName="text-indigo-500"
              >
                {article.title}
              </NavLink>
            ))}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default SideBar;
