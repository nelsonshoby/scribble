import React, { useEffect, useState } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import RedirectionTable from "./RedirectionTable";

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

      setRedirectionData(response.data.redirection);
      setEditableId(null);
    } catch (error) {
      Logger.error(error);
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
      ListRedirections();
    } catch (error) {
      Logger.error(error);
    }
  };
  const handleUpdate = async id => {
    try {
      await redirectionApi.update(
        {
          redirection: {
            From: newFrom,
            To: newTo,
          },
        },
        id
      );

      ListRedirections();
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleDelete = async id => {
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
    <div className="mx-auto mt-4 overflow-scroll ">
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
            <RedirectionTable
              redirectionData={redirectionData}
              handleDelete={handleDelete}
              setNewFrom={setNewFrom}
              setNewTo={setNewTo}
              handleSubmit={handleSubmit}
              handleUpdate={handleUpdate}
              editableId={editableId}
              newRedirection={newRedirection}
              setEditableId={setEditableId}
              newFrom={newFrom}
              newTo={newTo}
              setNewRedirection={setNewRedirection}
            />
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
