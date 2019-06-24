class ChangeStockToBeFloatInProducts < ActiveRecord::Migration[6.0]
  def up
    change_column :products, :stock, :float
  end

  def down
    change_column :products, :stock, :integer
  end
end
