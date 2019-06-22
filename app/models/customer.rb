# == Schema Information
#
# Table name: customers
#
#  id          :bigint           not null, primary key
#  name        :string(255)
#  phone       :string(255)
#  birthday    :date
#  email       :string(255)
#  observation :text(65535)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Customer < ApplicationRecord
  has_many :orders
end
