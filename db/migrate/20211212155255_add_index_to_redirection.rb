# frozen_string_literal: true

class AddIndexToRedirection < ActiveRecord::Migration[6.1]
  def change
    add_index :redirections, :From, unique: true
  end
end
