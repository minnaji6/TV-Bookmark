class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :description
      t.integer :tag_id
      t.integer :show_id

      t.timestamps
    end
  end
end
