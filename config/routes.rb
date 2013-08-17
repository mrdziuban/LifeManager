LifeManager::Application.routes.draw do
  devise_for :users, path: ""

  root to: "users#show"
end
