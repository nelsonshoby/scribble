import React, { useState } from "react";

import Logger from "js-logger";

import NewArticleForm from "./NewArticleForm";

import articleApi from "../../apis/article";

const NewArticle = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleCategory, setArticleCategory] = useState({
    label: "",
    value: "",
  });
  const [articleBody, setArticleBody] = useState("");
  const [articlePublished, setArticlePublished] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  const [errors, setErrors] = useState({ input: "", select: "", textarea: "" });

  const handleSubmit = async () => {
    if (articleTitle.length === 0) {
      setErrors({ ...errors, input: "Title can't be blank" });
    } else if (articleCategory.label.length === 0) {
      setErrors({ ...errors, select: "Select a category" });
    } else if (articleBody.length === 0) {
      setErrors({ ...errors, textarea: "Text area can't be blank" });
    } else {
      try {
        await articleApi.create({
          article: {
            title: articleTitle,
            content: articleBody,
            status: articlePublished,
            category_id: selectedCategoryId,
          },
        });
        window.location.href = "/";
      } catch (error) {
        Logger.error(error);
      }
    }
  };

  return (
    <div>
      <NewArticleForm
        setArticleTitle={setArticleTitle}
        setArticleCategory={setArticleCategory}
        setArticleBody={setArticleBody}
        setArticlePublished={setArticlePublished}
        articlePublished={articlePublished}
        handleSubmit={handleSubmit}
        setSelectedCategoryId={setSelectedCategoryId}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
};

export default NewArticle;
