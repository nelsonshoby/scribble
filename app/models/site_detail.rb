# frozen_string_literal: true

class SiteDetail < ApplicationRecord
  MIN_PASSWORD_LENGTH = 6
  has_secure_password :password, validations: false
  has_secure_token :authentication_token
  validates :name, presence: true
  validates :password, length: { minimum: MIN_PASSWORD_LENGTH }, if: -> { self.password_digest? }

  validates :password, format: { with: /\d/, message: "Password must have atleast 1 number" }, if: -> {
 self.password_digest? }
  validates :password, format: { with: /[a-zA-Z]/, message: "Password must have atleast 1 letter" }, if: -> {
 self.password_digest? }
end
