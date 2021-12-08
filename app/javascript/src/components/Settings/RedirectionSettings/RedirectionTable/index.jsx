import React from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";

import AddOrUpdateRedirection from "../AddOrUpdateRedirection";

const RedirectionTable = ({
  redirectionData,
  handleDelete,
  setNewFrom,
  setNewTo,
  handleSubmit,
  handleUpdate,
  editableId,
  newRedirection,
  setEditableId,
  newFrom,
  newTo,
  setNewRedirection,
}) => {
  return (
    <table className=" w-672 mt-4 ">
      <thead>
        <tr>
          <th className="p-2 text-left text-gray-400">From path</th>
          <th className="p-2 text-left text-gray-400">To path</th>
          <th className="p-2 text-left text-gray-400">Actions</th>
        </tr>
      </thead>
      <tbody>
        {redirectionData.map((ele, index) =>
          editableId !== ele.id ? (
            <tr key={index} className="border-b-8  border-indigo-100">
              <td
                className="px-2 py-4 text-left bg-white mt-4 "
                style={{
                  maxWidth: "70px",
                  overflowX: "scroll",
                  width: "40%",
                  marginRight: "10%",
                }}
              >
                <div className="flex">
                  <Typography style="body2" className="text-gray-400">
                    {window.location.origin}
                  </Typography>
                  <Typography style="body2">{"/" + ele.From}</Typography>
                </div>
              </td>
              <td
                className="px-2 py-4  text-left bg-white mt-4 "
                style={{
                  maxWidth: "70px",
                  overflowX: "scroll",
                  width: "40%",
                  marginRight: "10%",
                }}
              >
                {window.location.origin + "/" + ele.To}
              </td>
              <td className="px-2 py-4  text-left  bg-white mt-4  ">
                <div className="flex">
                  <Button
                    icon={Delete}
                    className="mr-4"
                    style="text"
                    onClick={() => handleDelete(ele.id)}
                  />
                  <Button
                    icon={Edit}
                    style="text"
                    onClick={() => {
                      setNewFrom(ele.From);
                      setNewTo(ele.To);
                      setEditableId(ele.id);
                      setNewRedirection(false);
                    }}
                  />
                </div>
              </td>
            </tr>
          ) : (
            <AddOrUpdateRedirection
              setNewFrom={setNewFrom}
              setNewTo={setNewTo}
              newFrom={newFrom}
              newTo={newTo}
              id={editableId}
              handleSubmit={handleUpdate}
              setNewRedirection={setNewRedirection}
            />
          )
        )}
        {newRedirection && (
          <AddOrUpdateRedirection
            setNewFrom={setNewFrom}
            setNewTo={setNewTo}
            handleSubmit={handleSubmit}
            setNewRedirection={setNewRedirection}
          />
        )}
      </tbody>
    </table>
  );
};

export default RedirectionTable;
