import React, { useState } from "react";

import { Typography, Input, Button } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";
import { useParams } from "react-router";

import authApi from "apis/auth";
import { setAuthHeaders } from "apis/axios";

import Group from "../../../Pictures/Group";

const Authentication = () => {
  const { sitename } = useParams(sitename);

  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = async () => {
    try {
      const response = await authApi.login({
        login: { name: sitename, password: password },
      });
      setAuthHeaders();

      sessionStorage.setItem("authToken", response.data.authentication_token);
      window.location.href = `/preview`;
    } catch (error) {
      Logger.error(error);
      setError("Please check the password!");
    }
  };

  return (
    <div>
      <div className="h-56 w-full flex justify-center items-center border-b-2">
        <Typography style="h4">{sitename}</Typography>
      </div>
      <div className="mx-auto w-402 flex-col  mt-20  items-center ">
        <img src={Group} alt="picture" className=" w-210 h-219 ml-24" />
        <div className="w-400 mt-4">
          <Typography style="h5" className="text-2xl">
            {sitename} is password protected!
          </Typography>
          <Typography style="body1" className="text-gray-600 mt-2">
            Enter the password to gain access to spinkart.
          </Typography>
          <Input
            className="mt-4"
            label="Password"
            placeholder="Enter Password"
            type="password"
            onChange={event => setPassword(event.target.value)}
            error={error}
          />

          <Button
            className="mt-4 bg-indigo-500"
            label="Continue"
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
