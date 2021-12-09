# frozen_string_literal: true

class AddSequenceToCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :sequence, :integer
  end
end
