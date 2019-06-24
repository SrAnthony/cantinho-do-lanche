class ChangeProductColumnOnOrder < ActiveRecord::Migration[6.0]
  def change
    remove_column :orders, :product_id, :bigint
    add_column :orders, :food_id, :bigint, null: false, foreign_key: true
  end
end
