class Episode < ApplicationRecord
   belongs_to :show
   belongs_to :season
  
   # validates :episode_number, presence: true
   # validates :episode_number, numericality: { only_integer: true }
end
