import React from "react";

import { Check, Close } from "@bigbinary/neeto-icons";
import { Button, Input } from "@bigbinary/neetoui/v2";

const EditAndCreateCategory = ({
  name,
  setName,
  handleSubmit,
  setEditableId,
  editableId,
  setNewCategory,
}) => {
  return (
    <li className="flex justify-between   py-4 items-center">
      <Input
        value={name}
        className="mr-8"
        placeholder="Enter Name"
        onChange={event => setName(event.target.value)}
        suffix={
          !editableId ? (
            <Button
              className="mr-2 "
              icon={Check}
              style="text"
              onClick={() => {
                handleSubmit();
                setNewCategory(true);
              }}
            />
          ) : null
        }
      />
      <div className="flex">
        {editableId && (
          <>
            <Button
              className="mr-2 "
              icon={Check}
              style="text"
              onClick={() => handleSubmit(editableId)}
            />

            <Button
              icon={Close}
              style="text"
              onClick={() => setEditableId(null)}
            />
          </>
        )}
      </div>
    </li>
  );
};

export default EditAndCreateCategory;
