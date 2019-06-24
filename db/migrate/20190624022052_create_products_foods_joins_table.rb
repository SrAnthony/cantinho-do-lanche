class CreateProductsFoodsJoinsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :foods_products do |t|
      t.references :product, null: false, foreign_key: true
      t.references :food, null: false, foreign_key: true
      t.float :quantity
    end
  end
end
