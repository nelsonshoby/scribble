import React from "react";

import { Accordion } from "@bigbinary/neetoui/v2";

const SideBar = () => {
  return (
    <div className=" w-1/5 h-screen  border-r-2">
      <Accordion padded>
        <Accordion.Item
          title="Accordion 1"
          className="border-none text-gray-600 font-bold "
        >
          <div className="ml-4 py-2 text-indigo-600">Yamaha</div>
          <div className="ml-4 py-2">Yamaha</div>
          <div className="ml-4 py-2">Yamaha</div>
        </Accordion.Item>
        <Accordion.Item
          title="Accordion 1"
          className="border-none text-gray-600 font-bold "
        >
          <div className="ml-4 py-2 text-indigo-600">Yamaha</div>
          <div className="ml-4 py-2">Yamaha</div>
          <div className="ml-4 py-2">Yamaha</div>
        </Accordion.Item>
        <Accordion.Item
          title="Accordion 1"
          className="border-none text-gray-600 font-bold "
        >
          <div className="ml-4 py-2 text-indigo-600">Yamaha</div>
          <div className="ml-4 py-2">Yamaha</div>
          <div className="ml-4 py-2">Yamaha</div>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SideBar;
