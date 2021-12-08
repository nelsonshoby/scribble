# frozen_string_literal: true

json.article do
  json.extract! @article, :title, :content, :status
  json.category @article.category ? @article.category.name : "-"
end
