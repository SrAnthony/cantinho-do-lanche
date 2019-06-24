# == Schema Information
#
# Table name: foods
#
#  id            :bigint           not null, primary key
#  name          :string(255)
#  price_cents   :integer
#  category      :integer
#  points_earn   :integer
#  points_needed :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Food < ApplicationRecord
  has_many :orders
  has_many :foods_products
  has_many :products, through: :foods_products

  accepts_nested_attributes_for :foods_products, allow_destroy: true
end
