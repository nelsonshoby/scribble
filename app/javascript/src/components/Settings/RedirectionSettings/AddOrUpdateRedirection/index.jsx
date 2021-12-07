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
}) => {
  return (
    <tr>
      <td className="px-2 py-4 text-left bg-white mt-4 ">
        <Input
          value={newFrom}
          placeholder="Enter from"
          onChange={e => setNewFrom(e.target.value)}
        />
      </td>
      <td className="px-2 py-4 text-left bg-white mt-4 ">
        <Input
          value={newTo}
          placeholder="Enter from"
          onChange={e => setNewTo(e.target.value)}
        />
      </td>
      <td className="px-2 py-4 text-left bg-white mt-4 ">
        {id ? (
          <div className="flex">
            <Button
              icon={Check}
              style="text"
              onClick={() => handleSubmit(id)}
            />
          </div>
        ) : (
          <Button icon={Check} style="text" onClick={() => handleSubmit()} />
        )}
      </td>
    </tr>
  );
};

export default AddOrUpdateRedirection;
