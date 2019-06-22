# == Schema Information
#
# Table name: purchases
#
#  id          :bigint           not null, primary key
#  product_id  :bigint           not null
#  price_cents :integer
#  quantity    :integer
#  observation :text(65535)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Purchase < ApplicationRecord
  belongs_to :product
end
