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

require 'test_helper'

class FoodTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
