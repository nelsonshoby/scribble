# frozen_string_literal: true

Rails.application.routes.draw do

  defaults format: :json do
    resources :categories, only: %i[create index update destroy]
    resources :articles, except: %i[new edit]
    resource :site_details, only: %i[show update]
    resources :redirections, only: %i[index update destroy create]
    resource :session, only: :create
  end

  put "/sort/:id", to: "categories#sort"

  get "/loadCategoryAndArticles", to: "categories#load_category_and_articles"
  get "articles/fetchData/:slug", to: "articles#fetch_data"

  root "home#index"
  get "*path", to: "home#index", via: :all
end
