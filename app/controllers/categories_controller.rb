# frozen_string_literal: true

class CategoriesController < ApplicationController
  before_action :load_category, only: [ :update, :destroy]

  def index
    @categories = Category.all
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

  private

    def load_category
      @category = Category.find_by_id(params[:id])
    end

    def category_params
      params.require(:category).permit(:name)
    end
end
