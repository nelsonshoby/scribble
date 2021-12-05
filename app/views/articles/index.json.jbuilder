# frozen_string_literal: true

json.articleData @articles do |article|
  json.id article.id
  json.title article.title
  json.date article.created_at.to_date.to_formatted_s(:long_ordinal) if article.status == "Published" 
  json.author "Nelson"
  json.category article.category.name
  json.status article.status
end
json.draft @articles.where(status: "Draft").count
json.published @articles.where(status: "Published").count
