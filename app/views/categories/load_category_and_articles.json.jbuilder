# frozen_string_literal: true

json.category @categories do |category|
  json.extract! category, :id, :name
  json.articles category.articles.Published do |article|
    json.extract! article, :id, :title, :slug
    json.date article.updated_at.strftime("%d %B, %Y")
  end
end
