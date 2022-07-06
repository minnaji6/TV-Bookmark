class Episode < ApplicationRecord
   belongs_to :season
   belongs_to :show
end
