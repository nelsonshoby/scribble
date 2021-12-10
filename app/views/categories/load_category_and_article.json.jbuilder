# frozen_string_literal: true

json.category @categories do |category|
  json.extract! category, :id, :name
  json.article category.articles.Published do |article|
    json.extract! article, :id, :title
  end
end
