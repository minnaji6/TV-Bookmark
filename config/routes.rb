Rails.application.routes.draw do
  resources :seasons 
  resources :episodes
  resources :comments
  resources :tags
  resources :shows

  get 'search' => 'shows#search'

  get 'wishlist' => 'comments#wishlist'
  
  # require 'sidekiq/web'
  # mount Sidekiq::Web, at: '/sidekiq'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get 'seasons' => 'seasons#index'
end
