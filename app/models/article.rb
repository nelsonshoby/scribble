# frozen_string_literal: true

class Article < ApplicationRecord
  enum status: { draft: 0, published: 1 }
end
