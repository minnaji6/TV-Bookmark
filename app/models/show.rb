class Show < ApplicationRecord
    has_many :comments
    has_many :tags, through: :comments

    has_many :episodes 
    has_many :seasons, through: :episodes


    # validates :image, presence: true
   

    # validates :name, 
    #       :presence => {:message => "Show can't be blank." },
    #       :uniqueness => {:message => "Show already exists."},
    #       :length => { :maximum => 40, :message => "Must be less than 40 characters"}

    # validate :permited_image
end

def permited_image
    unless image.match(%r{^https?://artworks.thetvdb.com})
        errors.add(:image, "Image must be from thetvdb.com")
    end
end

def Shows_sort_by_name
    Show.order(:tag_id)
end

def self.search_by_tag_and_name(tag="nil", name="nil")
    if tag && name
        Show.join(:comments).where("tags.tag LIKE ? AND shows.name LIKE ?", "%#{tag}%", "%#{name}%")
    elsif tag
        Show.join(:comments).where("tags.tag LIKE ?", "%#{tag}%")
    elsif name
        Show.where("name LIKE ?", "%#{name}%")
    else
        Show.all
    end
end
