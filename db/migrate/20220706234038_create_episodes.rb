class CreateEpisodes < ActiveRecord::Migration[7.0]
  def change
    create_table :episodes do |t|
      t.integer :episode_number
      t.integer :season_id
      t.integer :show_id
      t.timestamps
    end
  end
end
