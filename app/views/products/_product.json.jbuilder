json.extract! product, :id, :name, :price_cents, :stock, :category, :created_at, :updated_at
json.url product_url(product, format: :json)
