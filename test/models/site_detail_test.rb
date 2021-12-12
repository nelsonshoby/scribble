# frozen_string_literal: true

require "test_helper"

class SiteDetailTest < ActiveSupport::TestCase
  def setup
    @site_info = build(:site_detail)
  end

  def test_site_should_be_invalid_without_name
    @site_info.name = ""
    assert @site_info.invalid?
    assert_includes @site_info.errors.full_messages, "Name can't be blank"
  end

  def test_password_can_be_blank
    @site_info.password = nil
    assert @site_info.save
  end

  def test_password_should_have_a_minimum_length
    @site_info.password = "99qwe"
    assert_raises("ValidationError") { @site_info.save! }
  end
end
