class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :description # This is the comment text
      t.integer :tag_id # Show tag
      t.integer :show_id # Show id
      
      t.timestamps
    end
  end
end
