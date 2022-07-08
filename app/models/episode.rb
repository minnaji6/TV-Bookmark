class Episode < ApplicationRecord
   belongs_to :season
   belongs_to :show
   validates :episode_number, presence: true
   validates :episode_number, numericality: { only_integer: true }
end
