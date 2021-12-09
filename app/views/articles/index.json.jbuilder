# frozen_string_literal: true

json.articleData @articles do |article|
  json.id article.id
  json.title article.title
  json.date article.Published? ? article.updated_at.to_date.to_formatted_s(:long_ordinal) : "-"
  json.author "Oliver Smith"
  json.category article.category ? article.category.name : "-"
  json.status article.status
end
json.draft @articles.Draft.count
json.published @articles.Published.count
