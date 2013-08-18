LifeManager::Application.routes.draw do
  devise_for :users, path: ""

  resources :lists, only: [:create, :show, :destroy]
  resources :items, only: [:create]
  post "toggle_complete" => "items#toggle_complete", as: "toggle_complete"

  root to: "users#show"
end
