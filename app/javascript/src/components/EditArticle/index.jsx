import React, { useEffect, useState } from "react";

import Logger from "js-logger";
import { useParams } from "react-router";

import articleApi from "../../apis/article";
import NewArticleForm from "../NewArticle/NewArticleForm";

const EditArticle = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articlePublished, setArticlePublished] = useState(0);
  const { id } = useParams(id);
  const [articleCategory, setArticleCategory] = useState({
    label: "",
    value: "",
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [errors, setErrors] = useState({ input: "", select: "", textarea: "" });
  const LoadArticleDate = async () => {
    try {
      const response = await articleApi.show(id);
      const articleData = response.data.article;
      setArticleTitle(articleData.title);
      setArticleCategory({
        label: articleData.category_name,
        value: articleData.category_name,
      });
      setArticleBody(articleData.content);
      setArticlePublished(articleData.status);
      Logger.warn("response in edit article", articleData.status);
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleSubmit = async () => {
    if (articleTitle.length === 0) {
      setErrors({ ...errors, input: "Title can't be blank" });
    } else if (articleCategory.label.length === 0) {
      setErrors({ ...errors, select: "Select a category" });
    } else if (articleBody.length === 0) {
      setErrors({ ...errors, textarea: "Text area can't be blank" });
    } else {
      try {
        await articleApi.update(
          {
            article: {
              title: articleTitle,
              content: articleBody,
              status: articlePublished,
              category_id: selectedCategoryId,
            },
          },
          id
        );
        window.location.href = "/";
      } catch (error) {
        Logger.error(error);
      }
    }
  };

  useEffect(() => {
    LoadArticleDate();
    Logger.warn("id is", id);
  }, []);

  return (
    <div>
      <NewArticleForm
        articleTitle={articleTitle}
        articleCategory={articleCategory}
        articleBody={articleBody}
        articlePublished={articlePublished}
        handleSubmit={handleSubmit}
        setArticleTitle={setArticleTitle}
        setArticleCategory={setArticleCategory}
        setArticleBody={setArticleBody}
        setArticlePublished={setArticlePublished}
        setSelectedCategoryId={setSelectedCategoryId}
        setErrors={setErrors}
        errors={errors}
      />
    </div>
  );
};

export default EditArticle;
