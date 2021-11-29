# frozen_string_literal: true

require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  def setup
    @article = build(:article)
  end

  def test_article_is_valid
    assert @article.valid?
  end

  def test_article_should_not_be_valid_and_saved_without_title
    @article.title = " "
    assert_not @article.valid?
    assert_includes @article.errors.full_messages, "Title can't be blank"
  end

  def test_article_should_not_be_valid_and_saved_without_content
    @article.content = " "
    assert_not @article.valid?
    assert_includes @article.errors.full_messages, "Content can't be blank"
  end

  def test_article_should_not_be_valid_and_saved_without_status
    @article.status = " "
    assert_not @article.valid?
    assert_includes @article.errors.full_messages, "Status can't be blank"
  end
end
