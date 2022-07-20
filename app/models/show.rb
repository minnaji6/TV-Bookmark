class Show < ApplicationRecord
    has_many :comments
    has_many :tags, through: :comments

    has_many :episodes 
    has_many :seasons, through: :episodes


    validates :name, uniqueness: true
    validates :name, presence: true
    validate :permited_image

    def permited_image
        unless image.match(%r{^https?://artworks.thetvdb.com})
            errors.add(:image, "Image must be from thetvdb.com")
        end
    end

    scope :alpha, -> { order(:name) }
    
end