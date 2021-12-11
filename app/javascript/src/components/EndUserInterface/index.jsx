import React, { useEffect, useState } from "react";

import Logger from "js-logger";
import { isNil } from "ramda";
import { Redirect, Route, Switch } from "react-router-dom";

import Heading from "./Heading";
import ShowArticle from "./ShowArticle";
import SideBar from "./SideBar";

import categoryApi from "../../apis/category";
import sitedetailApi from "../../apis/sitedetail";

const EndUserInterface = () => {
  const [categoryData, setCategoryData] = useState();
  const [firstArticle, setFirstArticle] = useState();
  const [siteDetails, setSiteDetails] = useState();
  const [siteName, setSiteName] = useState();
  const [loading, setLoading] = useState(true);

  const LoadCategoryAndArticleDetails = async () => {
    try {
      const response = await categoryApi.loadCategoryAndArticle();

      const data = response.data.category.filter(
        category => category.article.length > 0
      );
      setCategoryData(data);

      const firstSlug = data[0].article[0].slug;
      setFirstArticle(firstSlug);
      setLoading(false);
    } catch (error) {
      Logger.error(error);
    }
  };
  const LoadSiteDetails = async () => {
    try {
      const response = await sitedetailApi.show();
      Logger.warn(
        "site details showarticle",
        response.data.extract.password_digest
      );
      setSiteDetails(response.data.extract.password_digest);
      setSiteName(response.data.extract.name);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    LoadCategoryAndArticleDetails();
    LoadSiteDetails();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Heading className="overflow-y-hidden" siteName={siteName} />
      <div className="flex flex-auto overflow-y-hidden">
        <SideBar categoryData={categoryData} />
        <Switch>
          <Redirect exact path="/preview" to={`/preview/${firstArticle}`} />
          <Route exact path="/preview/:slug">
            {isNil(siteDetails) ? (
              <Redirect to={`/authentication/${siteName}/${firstArticle}`} />
            ) : (
              <ShowArticle />
            )}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default EndUserInterface;
