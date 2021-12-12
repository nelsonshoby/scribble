# frozen_string_literal: true

FactoryBot.define do
  factory :site_detail do
    name { Faker::Lorem.sentence[0..19] }
    password { "welcome1" }
  end
end
