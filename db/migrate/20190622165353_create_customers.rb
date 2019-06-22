class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :phone
      t.date :birthday
      t.string :email
      t.text :observation

      t.timestamps
    end
  end
end
