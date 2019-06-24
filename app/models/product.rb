# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string(255)
#  price_cents :integer
#  stock       :integer
#  category    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
  has_many :orders
  has_many :purchases
end
