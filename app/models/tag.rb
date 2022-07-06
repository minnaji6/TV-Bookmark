class Tag < ApplicationRecord
    has_many :comments
    has_many :shows, through: :comments
end
