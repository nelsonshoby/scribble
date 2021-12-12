import React, { useEffect, useState } from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import Logger from "js-logger";
import { useParams } from "react-router";

import articleApi from "apis/article";

const ShowArticle = () => {
  const { slug } = useParams(slug);
  const [articleData, setArticleData] = useState();

  const LoadArticleData = async () => {
    try {
      const response = await articleApi.fetchData(slug);
      Logger.warn("response in showArticle", response.data.content);
      setArticleData(response.data);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    LoadArticleData();
  }, []);

  return (
    <div className="w-1069 flex-col m-8 overflow-scroll">
      <Typography style="h1" className="text-4xl text-gray-800">
        {articleData?.title}
      </Typography>
      <div className="flex mt-4">
        <div className="text-blue-800 bg-blue-100 px-2 rounded-lg">
          <Typography style="body2">{articleData?.category}</Typography>
        </div>

        <Typography style="body2" className="ml-4 text-gray-400">
          {articleData?.date}
        </Typography>
      </div>
      <div className="mt-4 ">
        <Typography style="body2">{articleData?.content}</Typography>
      </div>
    </div>
  );
};

export default ShowArticle;
