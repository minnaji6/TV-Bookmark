class Season < ApplicationRecord
    has_many :episodes
    has_many :shows, through: :episodes
    # validates :season_number, presence: true
    # validates :season_number, numericality: { only_integer: true }

end
