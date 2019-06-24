# == Schema Information
#
# Table name: foods_products
#
#  id         :bigint           not null, primary key
#  product_id :bigint           not null
#  food_id    :bigint           not null
#  quantity   :float(24)
#

class FoodsProduct < ApplicationRecord
  belongs_to :food
  belongs_to :product
end
