json.extract! order, :id, :customer_id, :customer, :food_id, :food, :table, :status, :created_at, :updated_at
json.url order_url(order, format: :json)
