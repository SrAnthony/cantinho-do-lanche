class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :price_cents
      t.integer :category
      t.integer :points_earn
      t.integer :points_needed

      t.timestamps
    end
  end
end
