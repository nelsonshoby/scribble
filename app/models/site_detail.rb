# frozen_string_literal: true

class SiteDetail < ApplicationRecord
  MIN_PASSWORD_LENGTH = 6
  has_secure_password :password, validations: false
  has_secure_token :authentication_token
  validates :name, presence: true
end
