LifeManager::Application.routes.draw do
  devise_for :users, path: ""

  resources :lists, only: [:create, :destroy]
  resources :items, only: [:create]

  root to: "users#show"
end
