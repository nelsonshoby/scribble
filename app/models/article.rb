# frozen_string_literal: true

class Article < ApplicationRecord
  belongs_to :category
  enum status: { Draft: 0, Published: 1 }
  validates :title, :content, :status, presence: true
end
