# == Schema Information
#
# Table name: orders
#
#  id          :bigint           not null, primary key
#  customer_id :bigint           not null
#  product_id  :bigint           not null
#  table       :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Order < ApplicationRecord
  belongs_to :customer
  belongs_to :product
end
