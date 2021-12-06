import React, { useState } from "react";

import { Delete, Edit, Check, Close } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2";

const RedirectionSettings = () => {
  const [edit, setEdit] = useState(true);
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
            <table className="border-b-8  border-indigo-100 w-672 mt-4">
              <tr>
                <th className="p-2 text-left text-gray-400">From path</th>
                <th className="p-2 text-left text-gray-400">To path</th>
                <th className="p-2 text-left text-gray-400">Actions</th>
              </tr>
              <tr>
                <td className="px-2 py-4 text-left bg-white mt-4 ">
                  {edit ? (
                    "https://scribble.com/welcome"
                  ) : (
                    <Input placeholder="Enter Name" />
                  )}
                </td>
                <td className="px-2 py-4  text-left bg-white mt-4 ">
                  {edit ? (
                    "https://scribble.com/welcome"
                  ) : (
                    <Input placeholder="Enter Name" />
                  )}
                </td>
                <td className="px-2 py-4  text-left  bg-white mt-4 ">
                  <div className="flex">
                    {edit ? (
                      <>
                        <Delete className="mr-4" />
                        <Edit onClick={() => setEdit(!edit)} />
                      </>
                    ) : (
                      <>
                        <Check className="mr-4" />
                        <Close />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectionSettings;
