# frozen_string_literal: true

Rails.application.routes.draw do
  defaults format: :json do
    resource :categories, only: %i[create]
  end
  root "home#index"
  get "*path", to: "home#index", via: :all
end
