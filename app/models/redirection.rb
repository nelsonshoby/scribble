# frozen_string_literal: true

class Redirection < ApplicationRecord
  validates :From, presence: true, uniqueness: true
  validates :To, presence: true
end
