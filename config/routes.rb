Rails.application.routes.draw do
  root 'orders#index'

  resources :orders
  resources :purchases
  resources :products
  resources :customers
end
