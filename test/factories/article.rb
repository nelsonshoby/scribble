# frozen_string_literal: true

FactoryBot.define do
  factory :article do
    title { Faker::Lorem.sentence[0..49] }
    content { Faker::Lorem.paragraph }
    status { 0 }
    category
  end
end
