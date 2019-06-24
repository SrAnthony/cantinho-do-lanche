class RemoveColumnsFromProducts < ActiveRecord::Migration[6.0]
  def change
    remove_column :products, :points_earn, :integer
    remove_column :products, :points_needed, :integer
  end
end
