# frozen_string_literal: true

class AddAuthenticationTokenToSiteDetails < ActiveRecord::Migration[6.1]
  def change
    add_column :site_details, :authentication_token, :string
  end
end
