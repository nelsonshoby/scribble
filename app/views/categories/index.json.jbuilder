# frozen_string_literal: true

json.category @categories do |category|
  json.extract! category, :id, :name, :sequence
  json.count category.articles.count
end
