# frozen_string_literal: true

class Redirection < ApplicationRecord
  validates :From, uniqueness: true
end
