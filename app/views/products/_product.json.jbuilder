json.extract! product, :id, :name, :price_cents, :stock, :category, :points_earn, :points_needed, :created_at, :updated_at
json.url product_url(product, format: :json)
