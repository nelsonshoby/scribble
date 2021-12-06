# frozen_string_literal: true

class Redirection < ApplicationRecord
  validates :From, :To, presence: true
end
