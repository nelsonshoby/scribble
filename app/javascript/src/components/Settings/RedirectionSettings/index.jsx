import React, { useEffect, useState } from "react";

import { Delete, Edit, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import AddOrUpdateRedirection from "./AddOrUpdateRedirection";

import redirectionApi from "../../../apis/redirection";

const RedirectionSettings = () => {
  const [redirectionData, setRedirectionData] = useState([]);
  const [editableId, setEditableId] = useState();
  const [newRedirection, setNewRedirection] = useState(false);
  const [newFrom, setNewFrom] = useState("");
  const [newTo, setNewTo] = useState("");

  const ListRedirections = async () => {
    try {
      const response = await redirectionApi.index();
      Logger.warn("response in redirection ", response.data.redirection);
      setRedirectionData(response.data.redirection);
    } catch (error) {
      Logger.error(error);
    }
  };
  const handleSubmit = async () => {
    try {
      await redirectionApi.create({
        redirection: {
          From: newFrom.length === 0 ? "/" : newFrom,
          To: newTo.length === 0 ? "/" : newTo,
        },
      });
      window.location.reload();
    } catch (error) {
      Logger.error(error);
    }
  };
  const handleUpdate = async id => {
    try {
      await redirectionApi.update(
        {
          redirection: {
            From: newFrom.length === 0 ? "/" : newFrom,
            To: newTo.length === 0 ? "/" : newTo,
          },
        },
        id
      );
      window.location.reload();
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleDelete = async id => {
    Logger.warn("delete id", id);
    if (confirm("Want to delete?")) {
      try {
        await redirectionApi.destroy(id);
        ListRedirections();
      } catch (error) {
        Logger.error(error);
      }
    }
  };

  useEffect(() => {
    ListRedirections();
  }, []);
  return (
    <div className="mx-auto mt-4 ">
      <div className="w-720">
        <Typography style="h2">Redirections</Typography>
        <Typography style="body1" className="text-gray-600 mt-2">
          {
            <span>
              Create and configure redirection rules to send users from old
              links to new links. All redirections <br /> are performed with 301
              status codes to be SEO friendly.
            </span>
          }
        </Typography>
        <div className="w-full bg-indigo-100 mt-8">
          <div className="flex justify-center  ">
            <table className=" w-672 mt-4">
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
                      <td className="px-2 py-4 text-left bg-white mt-4 ">
                        {window.location.origin + ele.From}
                      </td>
                      <td className="px-2 py-4  text-left bg-white mt-4 ">
                        {window.location.origin + ele.To}
                      </td>
                      <td className="px-2 py-4  text-left  bg-white mt-4 ">
                        <div className="flex">
                          <Delete
                            className="mr-4"
                            onClick={() => handleDelete(ele.id)}
                          />
                          <Edit
                            onClick={() => {
                              setNewFrom(ele.From);
                              setNewTo(ele.To);
                              setEditableId(ele.id);
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
                    />
                  )
                )}
                {newRedirection && (
                  <AddOrUpdateRedirection
                    setNewFrom={setNewFrom}
                    setNewTo={setNewTo}
                    handleSubmit={handleSubmit}
                  />
                )}
              </tbody>
            </table>
          </div>
          <div className="ml-8 pb-4 mt-4 flex justify-start">
            <Button
              label="Add New Redirection"
              icon={Plus}
              style="link"
              iconPosition="left"
              onClick={() => {
                setNewRedirection(!newRedirection), setEditableId(null);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectionSettings;
