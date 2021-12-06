# frozen_string_literal: true

class CreateRedirections < ActiveRecord::Migration[6.1]
  def change
    create_table :redirections do |t|
      t.string :From, null: false
      t.string :To, null: false
      t.timestamps
    end
  end
end
