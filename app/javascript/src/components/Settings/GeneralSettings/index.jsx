import React, { useEffect, useState } from "react";

import { Check, Close } from "@bigbinary/neeto-icons";
import { Typography, Input, Checkbox, Button } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";
import { toast } from "react-toastify";

import sitedetailApi from "apis/sitedetail";

import { TOASTR_OPTIONS } from "../../../constants";

const GeneralSettings = () => {
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");

  const [siteName, setSiteName] = useState("");
  const [passwordLength, setPasswordLength] = useState(false);
  const [letterAndNumber, setLetterAndNumber] = useState(false);

  const ShowSiteDetails = async () => {
    try {
      const response = await sitedetailApi.show();

      setSiteName(response.data.sitedetail.name);
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleSubmit = async () => {
    if (checked && (!passwordLength || !letterAndNumber)) {
      toast.error(
        "The password does not meet the password policy requirements. ",
        TOASTR_OPTIONS
      );
    } else {
      try {
        await sitedetailApi.update({
          site_detail: {
            name: siteName,
            password: password.length === 0 ? null : password,
          },
        });
      } catch (error) {
        Logger.error(error);
      }
    }
  };

  useEffect(() => {
    ShowSiteDetails();
  }, []);

  useEffect(() => {
    password.length > 6 ? setPasswordLength(true) : setPasswordLength(false);
    /\d/.test(password) && /[a-zA-Z]/.test(password)
      ? setLetterAndNumber(true)
      : setLetterAndNumber(false);
  }, [password]);

  return (
    <div className="mx-auto mt-4 w-400 ">
      <div className="flex-col">
        <Typography style="h2">General Settings</Typography>
        <Typography style="body2">
          Configure general attributes of scribble.
        </Typography>
        <Input
          className="mt-8"
          value={siteName}
          size="large"
          label="Site Name"
          onChange={event => setSiteName(event.target.value)}
          placeholder="Enter Name"
          helpText={
            <span>
              Customize the site name which is used to show the site name in
              <b>
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
          style={{ color: "#6366F1", borderRadius: "5px" }}
          label={
            <Typography style="h5">Password Protect Knowledge Base</Typography>
          }
        />
        <div></div>
        {checked && (
          <>
            <div className="mt-4">
              <Input
                label="Password"
                type="password"
                onChange={event => setPassword(event.target.value)}
                placeholder="Enter Password"
              />
            </div>

            <div className="mt-4">
              {passwordLength ? (
                <div className="flex ">
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

            <div className="mt-4">
              {letterAndNumber ? (
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
          </>
        )}

        <div className="flex-col mt-4">
          <Button
            className="mr-2 bg-indigo-500"
            label="Save Changes"
            onClick={() => {
              handleSubmit();
              password === "" ? null : setChecked(false);
            }}
          />

          <Button
            label="Cancel"
            style="text"
            to="/settings/General"
            onClick={() => setChecked(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
