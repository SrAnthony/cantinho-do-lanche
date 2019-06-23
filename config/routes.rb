Rails.application.routes.draw do
  root 'orders#index'

  get 'customers.json', to: 'customers#index'
  get 'customer/:id.json', to: 'customers#show'

  get '*path', to: 'orders#index'

  resources :orders
  resources :purchases
  resources :products
  resources :customers
end
