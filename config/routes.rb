Rails.application.routes.draw do
  devise_for :users
  resources :products do
    post :pay, on: :member
  end
  
  root 'maps#index'
  get "maps/show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
