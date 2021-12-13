# frozen_string_literal: true

FactoryBot.define do
  factory :redirection do
    To { Faker::Lorem.characters[0..15] }
    From { Faker::Lorem.characters[0..15] }
  end
end
