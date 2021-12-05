import React, { useEffect, useState } from "react";

import { Check, Close } from "@bigbinary/neeto-icons";
import { Typography, Input, Checkbox, Button } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";

import sitedetailApi from "../../../apis/sitedetail";

const GeneralSettings = () => {
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [siteName, setSiteName] = useState("");
  // const [minLength,setMin] = useState(false)

  const ShowSiteDetails = async () => {
    try {
      const response = await sitedetailApi.show();
      Logger.warn("ShowSiteDetails", response.data.extract.name);
      setSiteName(response.data.extract.name);
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      await sitedetailApi.update({ name: siteName, password: password });
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    ShowSiteDetails();
  }, []);

  // useEffect(()=>{
  //   Logger.warn("minLength",minLength)
  // },[minLength])

  return (
    <div className="mx-auto mt-4 w-400 ">
      <div className="flex-col">
        <Typography style="h2">General Settings</Typography>
        <Typography style="body2">
          Configure general attributes of scribble.
        </Typography>
        <Input
          className="mt-4"
          value={siteName}
          size="large"
          label="Site Name"
          onChange={event => setSiteName(event.target.value)}
          placeholder="Enter Name"
          helpText={
            <span>
              Customize the site name which is used to show the site name in{" "}
              <b>
                {" "}
                <br /> Open Graph Tags.
              </b>
            </span>
          }
        />
        <div className="border-b-2 pb-4 "></div>
        <Checkbox
          className="mt-4"
          onChange={event => setChecked(event.target.checked)}
          id="checkbox_name"
          label="Password Protect Knowledge Base"
        />
        <div className="mt-4">
          {checked && (
            <Input
              label="Password"
              type="password"
              onChange={event => setPassword(event.target.value)}
              placeholder="Enter Password"
            />
          )}
        </div>
        {checked ? (
          <div className="mt-4">
            {password.length > 6 ? (
              <div className="flex">
                <Check size={18} color="#00BA88" />{" "}
                <Typography style="body3">
                  Have at least 6 characters
                </Typography>
              </div>
            ) : (
              <div className="flex">
                <Close size={18} color="#FF0000" />{" "}
                <Typography style="body3">
                  Have at least 6 characters
                </Typography>
              </div>
            )}
          </div>
        ) : (
          ""
        )}

        {checked ? (
          <div className="mt-4">
            {/\d/.test(password) && /[a-zA-Z]/.test(password) ? (
              <div className="flex">
                <Check size={18} color="#00BA88" />{" "}
                <Typography style="body3">
                  Include at least 1 letter and 1 number
                </Typography>
              </div>
            ) : (
              <div className="flex">
                <Close size={18} color="#FF0000" />{" "}
                <Typography style="body3">
                  Include at least 1 letter and 1 number
                </Typography>
              </div>
            )}
          </div>
        ) : (
          ""
        )}

        <div className="flex-col mt-4">
          <Button
            className="mr-2 bg-indigo-500"
            label="Save Changes"
            onClick={() => handleSubmit()}
          />

          <Button label="Cancel" style="text" to="/settings" />
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
