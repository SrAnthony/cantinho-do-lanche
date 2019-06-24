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

class Order < ApplicationRecord
  belongs_to :customer
  belongs_to :food

  enum status: { waiting: 0, in_progress: 1, ready: 2, finished: 3 }
end
