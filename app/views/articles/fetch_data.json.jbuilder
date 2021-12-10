 json.extract! @article, :content, :title
 json.category @article.category.name
 json.date @article.updated_at.strftime("%d %B, %Y")
