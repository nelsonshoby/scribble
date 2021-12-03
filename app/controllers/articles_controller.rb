# frozen_string_literal: true

class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def create
    if (article = Article.new(article_params)) && article.save!
      render status: :ok, json: {
        notice: t("successfully_created", entity: "article")
      }
    else
      render status: :unprocessable_entity, json: { error: category.errors.full_messages.to_sentence }
    end
  end

  private

    def article_params
      params.require(:article).permit(:title, :content, :status, :category_id)
    end
end
