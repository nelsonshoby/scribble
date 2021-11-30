# frozen_string_literal: true

class CategoriesController < ApplicationController
  def create
    if (category = Category.new(category_params)) && category.save
      render status: :ok, json: {
        notice: t("successfully_created", entity: "category")
      }
    else
      render status: :unprocessable_entity, json: { error: category.errors.full_messages.to_sentence }
    end
  end

  private

    def category_params
      params.require(:category).permit(:name)
    end
end
