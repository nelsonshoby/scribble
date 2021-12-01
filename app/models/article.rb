# frozen_string_literal: true

class Article < ApplicationRecord
  belongs_to :category
  enum status: [:Draft, :Published]
  validates :title, :content, :status, presence: true
end
