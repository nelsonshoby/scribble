# frozen_string_literal: true

json.article do
  json.extract! @article, :title, :content
  json.status @article.read_attribute_before_type_cast(:status)
  json.category @article.category ? @article.category.name : "-"
end
