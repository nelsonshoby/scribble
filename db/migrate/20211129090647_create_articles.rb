# frozen_string_literal: true

class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.text :title, null: false
      t.text :content, null: false
      t.integer :status, null: false, default: 0
      t.references :category, null: false, foreign_key: true
      t.timestamps
    end
  end
end
