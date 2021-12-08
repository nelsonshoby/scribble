import React from "react";

import { Check, Close } from "@bigbinary/neeto-icons";
import { Button, Input } from "@bigbinary/neetoui/v2";

const EditAndCreateCategory = ({
  name,
  setName,
  handleSubmit,
  setEditableId,
  editableId,
}) => {
  return (
    <li className="flex justify-between  border-b-2 py-4 items-center">
      <Input
        value={name}
        className="mr-8"
        placeholder="Enter Name"
        onChange={event => setName(event.target.value)}
      />
      <div className="flex">
        {editableId ? (
          <Button
            className="mr-2 "
            icon={Check}
            style="text"
            onClick={() => handleSubmit(editableId)}
          />
        ) : (
          <Button
            className="mr-2 "
            icon={Check}
            style="text"
            onClick={() => handleSubmit()}
          />
        )}
        <Button icon={Close} style="text" onClick={() => setEditableId(null)} />
      </div>
    </li>
  );
};

export default EditAndCreateCategory;
