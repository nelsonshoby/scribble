import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";
import { either, isEmpty, isNil } from "ramda";
import { Redirect, Switch } from "react-router-dom";

import categoryApi from "apis/category";
import redirectionApi from "apis/redirection";
import sitedetailApi from "apis/sitedetail";
import PrivateRoute from "common/PrivateRoute";

import Heading from "./Heading";
import NoDataFound from "./NoDataFound";
import ShowArticle from "./ShowArticle";
import SideBar from "./SideBar";

const EndUserInterface = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [firstArticle, setFirstArticle] = useState();
  const [siteDetails, setSiteDetails] = useState(false);
  const [siteName, setSiteName] = useState();
  const [loading, setLoading] = useState(true);
  const [redirectionData, setRedirectionData] = useState([]);

  const authToken = sessionStorage.getItem("authToken");

  var isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";

  const ListRedirections = async () => {
    try {
      const response = await redirectionApi.index();

      setRedirectionData(response.data.redirection);
    } catch (error) {
      Logger.error(error);
    }
  };

  const LoadCategoryAndArticleDetails = async () => {
    try {
      const response = await categoryApi.loadCategoryAndArticles();

      const data = response.data.category.filter(
        category => category?.articles.length > 0
      );

      setCategoryData(data);

      const firstSlug = data[0]?.articles[0].slug;
      setFirstArticle(firstSlug);
    } catch (error) {
      Logger.error(error);
    }
  };

  const LoadSiteDetails = async () => {
    try {
      const response = await sitedetailApi.show();
      isLoggedIn = response.data.password;
      setSiteDetails(response.data.password);
      setSiteName(response.data.sitedetail.name);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    if (siteName) {
      setLoading(false);
    }
  }, [siteName, siteDetails]);

  useEffect(() => {
    LoadCategoryAndArticleDetails();
    LoadSiteDetails();
    ListRedirections();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-64">
        <PageLoader text="Loading..." />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {firstArticle?.length && categoryData.length ? (
        <>
          <Heading className="overflow-y-hidden" siteName={siteName} />
          <div className="flex flex-auto overflow-y-hidden">
            <SideBar categoryData={categoryData} />
            <Switch>
              {redirectionData?.map((redirection, index) => {
                <Redirect
                  key={index}
                  exact
                  from={"/preview/" + redirection.From}
                  to={redirection.To}
                />;
              })}
              <Redirect exact path="/preview" to={`/preview/${firstArticle}`} />

              <PrivateRoute
                path="/preview/:slug"
                redirectRoute={`/authentication/${siteName}`}
                condition={!(siteDetails && !isLoggedIn)}
                component={ShowArticle}
              />
            </Switch>
          </div>
        </>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default EndUserInterface;
