json.extract! order, :id, :customer_id, :customer, :product_id, :product, :table, :status, :created_at, :updated_at
json.url order_url(order, format: :json)
