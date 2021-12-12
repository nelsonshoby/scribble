import React from "react";

import { Check, Close } from "@bigbinary/neeto-icons";
import { Button, Input } from "@bigbinary/neetoui/v2";

const CreateOrEditCategory = ({
  name,
  setName,
  handleSubmit,
  setEditableId,
  editableId,
  setNewCategory,
}) => {
  return (
    <li className="flex justify-between  py-4 items-center">
      {editableId && (
        <Button
          icon={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18 11V8l4 4-4 4v-3h-5v5h3l-4 4-4-4h3v-5H6v3l-4-4 4-4v3h5V6H8l4-4 4 4h-3v5z"
                fill="rgba(135,146,157,1)"
              />
            </svg>
          )}
          style="text"
          className="mr-2"
        />
      )}
      <Input
        value={name}
        className="mr-8"
        placeholder="Enter Name"
        onChange={event => setName(event.target.value)}
        suffix={
          !editableId ? (
            <Button
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

export default CreateOrEditCategory;
