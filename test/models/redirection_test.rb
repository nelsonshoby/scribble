# frozen_string_literal: true

require "test_helper"

class RedirectionTest < ActiveSupport::TestCase
  def setup
    @redirection = Redirection.new(From: "/", To: "/preview")
  end

  def test_redirection_should_be_invalid_without_from
    @redirection.From = ""
    assert @redirection.invalid?
    assert_includes @redirection.errors.full_messages, "From can't be blank"
  end

  def test_redirection_should_be_invalid_without_to
    @redirection.To = ""
    assert @redirection.invalid?
    assert_includes @redirection.errors.full_messages, "To can't be blank"
  end
end
