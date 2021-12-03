# frozen_string_literal: true

json.article do
  json.extract! @article, :title, :content, :status
  json.category_name @article.category.name
end
