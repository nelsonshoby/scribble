# frozen_string_literal: true

Rails.application.routes.draw do

  defaults format: :json do
    resources :categories, only: %i[create index]
    resources :articles, only: %i[create index show update destroy]
    resource :site_details, only: %i[show update]
  end

  root "home#index"
  get "*path", to: "home#index", via: :all
end
