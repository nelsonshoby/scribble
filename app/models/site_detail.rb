# frozen_string_literal: true

class SiteDetail < ApplicationRecord
  has_secure_password
  validates :name, presence: true
  validates :password_confirmation, presence: true, on: :create
end
