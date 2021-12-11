import React, { useEffect, useState } from "react";

import Logger from "js-logger";
import { Redirect, Route, Switch } from "react-router-dom";

import Heading from "./Heading";
import ShowArticle from "./ShowArticle";
import SideBar from "./SideBar";

import categoryApi from "../../apis/category";

const EndUserInterface = () => {
  const [categoryData, setCategoryData] = useState();
  const [firstArticle, setFirstArticle] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
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
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Heading className="overflow-y-hidden" />
      <div className="flex flex-auto overflow-y-hidden">
        <SideBar categoryData={categoryData} />
        <Switch>
          <Redirect exact path="/preview" to={`/preview/${firstArticle}`} />
          <Route exact path="/preview/:slug" component={ShowArticle} />
        </Switch>
      </div>
    </div>
  );
};

export default EndUserInterface;
