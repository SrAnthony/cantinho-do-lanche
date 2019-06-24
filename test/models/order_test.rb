# == Schema Information
#
# Table name: orders
#
#  id          :bigint           not null, primary key
#  customer_id :bigint           not null
#  table       :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  status      :integer          default("waiting")
#  food_id     :bigint           not null
#

require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
