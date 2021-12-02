import React, { useEffect, useState } from "react";

import Logger from "js-logger";

import NewArticleForm from "./NewArticleForm";

import articleApi from "../../apis/article";
import categoryApi from "../../apis/category";

const NewArticle = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleCategory, setArticleCategory] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articlePublished, setArticlePublished] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [errors, setErrors] = useState({ input: "", select: "", textarea: "" });

  const ListCategories = async () => {
    try {
      const response = await categoryApi.index();
      Logger.warn("response in new article index", response.data.category);
      setCategoryList(response.data.category);
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleSubmit = async () => {
    if (articleTitle.length === 0) {
      setErrors({ ...errors, input: "Title can'nt be blank" });
    }

    if (articleCategory.length === 0) {
      setErrors({ ...errors, select: "Select a category" });
    }

    if (articleBody.length === 0) {
      setErrors({ ...errors, textarea: "Text area can'nt be blank" });
    } else {
      try {
        await articleApi.create({
          article: {
            title: articleTitle,
            content: articleBody,
            status: articlePublished,
            category_id: articleCategory,
          },
        });
        window.location.href = "/";
      } catch (error) {
        Logger.error(error);
      }
    }
  };

  useEffect(() => {
    ListCategories();
  }, []);

  return (
    <div>
      <NewArticleForm
        setArticleTitle={setArticleTitle}
        setArticleCategory={setArticleCategory}
        setArticleBody={setArticleBody}
        setArticlePublished={setArticlePublished}
        categoryList={categoryList}
        articlePublished={articlePublished}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default NewArticle;
