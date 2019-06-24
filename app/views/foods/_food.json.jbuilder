json.extract! food, :id, :name, :price_cents, :category, :points_earn, :points_needed, :created_at, :updated_at, :foods_products
json.url food_url(food, format: :json)
