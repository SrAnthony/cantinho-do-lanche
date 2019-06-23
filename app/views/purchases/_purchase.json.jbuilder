json.extract! purchase, :id, :product_id, :product, :price_cents, :quantity, :observation, :created_at, :updated_at
json.url purchase_url(purchase, format: :json)
