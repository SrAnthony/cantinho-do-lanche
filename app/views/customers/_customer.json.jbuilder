json.extract! customer, :id, :name, :phone, :birthday, :email, :observation, :created_at, :updated_at
json.url customer_url(customer, format: :json)
