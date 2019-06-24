# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string(255)
#  price_cents :integer
#  stock       :float(24)
#  category    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
  has_many :purchases
  has_many :foods_products
  has_many :foods, through: :foods_products
end
