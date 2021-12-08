import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Input, Button } from "@bigbinary/neetoui/v2";

const AddOrUpdateRedirection = ({
  setNewFrom,
  setNewTo,
  handleSubmit,
  id,
  newFrom,
  newTo,
  setNewRedirection,
}) => {
  return (
    <tr className="border-b-8  border-indigo-100">
      <td className="px-2 py-4 text-left bg-white mt-4 ">
        <Input
          value={newFrom}
          placeholder={window.location.origin}
          onChange={e => setNewFrom(e.target.value)}
        />
      </td>
      <td className="px-2 py-4 text-left bg-white mt-4 ">
        <Input
          value={newTo}
          placeholder={window.location.origin}
          onChange={e => setNewTo(e.target.value)}
        />
      </td>
      <td className="px-2 py-4 text-left bg-white mt-4 ">
        {id ? (
          <div className="flex">
            <Button
              icon={Check}
              className="ml-10"
              style="text"
              onClick={() => {
                handleSubmit(id);
                setNewRedirection(false);
              }}
            />
          </div>
        ) : (
          <Button
            icon={Check}
            style="text"
            className="ml-10"
            onClick={() => {
              handleSubmit();
              setNewRedirection(false);
            }}
          />
        )}
      </td>
    </tr>
  );
};

export default AddOrUpdateRedirection;
