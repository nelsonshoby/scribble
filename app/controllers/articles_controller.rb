# frozen_string_literal: true

class ArticlesController < ApplicationController
  before_action :load_article, only: [:show, :update, :destroy]

  def index
    @articles = Article.all
  end

  def create
    if (article = Article.new(article_params)) && article.save!
      render status: :ok, json: {
        notice: t("successfully_created", entity: "Article")
      }
    else
      render status: :unprocessable_entity, json: { error: category.errors.full_messages.to_sentence }
    end
  end

  def show
    render
  end

  def update
    if @article.update(article_params)
      render status: :ok, json: {
        notice: t("successfully_updated", entity: "Article")
      }
    else
      render status: :unprocessable_entity, json: { error: @article.errors.full_messages }
    end
  end

  def destroy
    if @article.destroy
      render status: :ok, json: {
        notice: t("successfully_destroyed", entity: "Article")
      }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  def fetch_data
    @article = Article.find_by(slug: params[:slug])
    unless @article
      render status: :not_found, json: { error: t("article_does_not_exist") }
    end
  end

  private

    def load_article
      @article = Article.find_by_id(params[:id])
      unless @article
        render status: :not_found, json: { error: "Article not found" }
      end
    end

    def article_params
      params.require(:article).permit(:title, :content, :status, :category_id)
    end
end
