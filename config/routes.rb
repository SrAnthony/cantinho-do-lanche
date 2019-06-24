Rails.application.routes.draw do
  root 'orders#index'

  get 'customers.json', to: 'customers#index'
  get 'customer/:id.json', to: 'customers#show'
  get 'foods.json', to: 'foods#index'
  get 'food/:id.json', to: 'foods#show'
  get 'products.json', to: 'products#index'
  get 'product/:id.json', to: 'products#show'
  get 'purchases.json', to: 'purchases#index'
  get 'purchase/:id.json', to: 'purchases#show'

  get '*path', to: 'orders#index'

  resources :orders
  resources :purchases
  resources :foods
  resources :products
  resources :customers
end
