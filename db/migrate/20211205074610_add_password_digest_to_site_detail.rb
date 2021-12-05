# frozen_string_literal: true

class AddPasswordDigestToSiteDetail < ActiveRecord::Migration[6.1]
  def change
    add_column :site_details, :password_digest, :string
  end
end
