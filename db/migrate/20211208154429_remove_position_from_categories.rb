# frozen_string_literal: true

class RemovePositionFromCategories < ActiveRecord::Migration[6.1]
  def change
    remove_column :categories, :position
  end
end
