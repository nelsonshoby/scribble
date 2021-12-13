# frozen_string_literal: true

class Category < ApplicationRecord
  default_scope { order(sequence: :asc) }

  has_many :articles, dependent: :nullify
  validates :name, presence: true, uniqueness: true
  acts_as_list column: :sequence
end
