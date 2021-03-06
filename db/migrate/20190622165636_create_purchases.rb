class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.references :product, null: false, foreign_key: true
      t.integer :price_cents
      t.integer :quantity
      t.text :observation

      t.timestamps
    end
  end
end
