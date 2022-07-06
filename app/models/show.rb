class Show < ApplicationRecord
    has_many :comments
    has_many :tags through: :comments

    has_many :episodes 
    has_many :seasons through: :episodes
end
