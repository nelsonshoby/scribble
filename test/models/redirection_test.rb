# frozen_string_literal: true

require "test_helper"

class RedirectionTest < ActiveSupport::TestCase
  def setup
    @redirection = build(:redirection)
    redirection2 = Redirection.create(From: "Home", To: "About")
  end

  def test_redirection_should_be_valid
    assert @redirection.valid?
  end

  def test_redirection_should_be_invalid_for_duplicate_from
    @redirection.From = "Home"
    assert @redirection.invalid?
  end
end
