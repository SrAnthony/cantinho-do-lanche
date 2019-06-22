# == Schema Information
#
# Table name: products
#
#  id            :bigint           not null, primary key
#  name          :string(255)
#  price_cents   :integer
#  stock         :integer
#  category      :integer
#  points_earn   :integer
#  points_needed :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
