import React, { useEffect, useState } from "react";

import { Delete, Edit, Check, Close, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { Input, Button } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import redirectionApi from "../../../apis/redirection";

const RedirectionSettings = () => {
  const [redirectionData, setRedirectionData] = useState([]);
  const [editableId, setEditableId] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [newRedirection, setNewRedirection] = useState(false);
  const [newFrom, setNewFrom] = useState();
  const [newTo, setNewTo] = useState();

  const ListRedirections = async () => {
    try {
      const response = await redirectionApi.index();
      Logger.warn("response in redirection ", response.data.redirection);
      setRedirectionData(response.data.redirection);
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleUpdate = async id => {
    try {
      await redirectionApi.update(
        {
          redirection: {
            From: from,
            To: to,
          },
        },
        id
      );
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

  const handleSubmit = async () => {
    try {
      await redirectionApi.create({
        redirection: {
          From: newFrom,
          To: newTo,
        },
      });
    } catch (error) {
      Logger.error(error);
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
              <tr>
                <th className="p-2 text-left text-gray-400">From path</th>
                <th className="p-2 text-left text-gray-400">To path</th>
                <th className="p-2 text-left text-gray-400">Actions</th>
              </tr>
              {redirectionData.map((ele, index) => (
                <tr key={index} className="border-b-8  border-indigo-100">
                  <td className="px-2 py-4 text-left bg-white mt-4 ">
                    {editableId !== ele.id ? (
                      ele.From
                    ) : (
                      <Input
                        placeholder="https://scribble.com/"
                        value={from}
                        onChange={e => setFrom(e.target.value)}
                      />
                    )}
                  </td>
                  <td className="px-2 py-4  text-left bg-white mt-4 ">
                    {editableId !== ele.id ? (
                      ele.To
                    ) : (
                      <Input
                        placeholder="https://scribble.com/"
                        value={to}
                        onChange={e => setTo(e.target.value)}
                      />
                    )}
                  </td>
                  <td className="px-2 py-4  text-left  bg-white mt-4 ">
                    <div className="flex">
                      {editableId !== ele.id ? (
                        <>
                          <Delete
                            className="mr-4"
                            onClick={() => handleDelete(ele.id)}
                          />
                          <Edit
                            onClick={() => {
                              setFrom(ele.From);
                              setTo(ele.To);
                              setEditableId(ele.id);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <Check
                            className="mr-4"
                            onClick={() => handleUpdate(editableId)}
                          />
                          <Close onClick={() => setEditableId(null)} />
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {newRedirection && (
                <tr>
                  <td className="px-2 py-4 text-left bg-white mt-4 ">
                    <Input
                      placeholder="Enter from"
                      onChange={e => setNewFrom(e.target.value)}
                    />
                  </td>
                  <td className="px-2 py-4 text-left bg-white mt-4 ">
                    <Input
                      placeholder="Enter from"
                      onChange={e => setNewTo(e.target.value)}
                    />
                  </td>
                  <td className="px-2 py-4 text-left bg-white mt-4 ">
                    <Check className="ml-10" onClick={() => handleSubmit()} />
                  </td>
                </tr>
              )}
            </table>
          </div>
          <div className="ml-8 pb-4 mt-4 flex justify-start">
            <Button
              label="Add New Redirection"
              icon={Plus}
              style="secondary"
              iconPosition="left"
              onClick={() => setNewRedirection(!newRedirection)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectionSettings;
