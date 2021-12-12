# frozen_string_literal: true

class CategoriesController < ApplicationController
  # before_action :authenticate_user_using_x_auth_token, only: [:load_category_and_article], if: -> { password_protected }
  before_action :load_category, only: [ :update, :destroy, :sort]
  before_action :load_categories, only: [ :index, :load_category_and_articles]

  def index
    render
  end

  def create
    if (category = Category.new(category_params)) && category.save
      render status: :ok, json: {
        notice: t("successfully_created", entity: "category")
      }
    else
      render status: :unprocessable_entity, json: { error: category.errors.full_messages.to_sentence }
    end
  end

  def update
    if @category.update(category_params)
      render status: :ok, json: {
        notice: t("successfully_updated", entity: "Category")
      }
    else
      render status: :unprocessable_entity, json: { error: @category.errors.full_messages }
    end
  end

  def destroy
    if @category.destroy
      render status: :ok, json: {
        notice: t("successfully_destroyed", entity: "Category")
      }
    else
      render status: :unprocessable_entity,
        json: { error: @category.errors.full_messages.to_sentence }
    end
  end

  def sort
    unless @category.update(category_params)
      render status: :unprocessable_entity, json: { error: @category.errors.full_messages }
    end
  end

  def load_category_and_articles
    render
  end

  private

    # def password_protected
    #   SiteDetail.first.password_digest?
    # end

    def load_categories
      @categories = Category.all.order(:sequence)
    end

    def load_category
      @category = Category.find_by_id(params[:id])
      unless @category
        render status: :not_found, json: { error: "category not found" }
      end
    end

    def category_params
      params.require(:category).permit(:name, :sequence)
    end
end
