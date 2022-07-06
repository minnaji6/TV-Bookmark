class CreateSeasons < ActiveRecord::Migration[7.0]
  def change
    create_table :seasons do |t|
      t.integer :season_number

      t.timestamps
    end
  end
end
