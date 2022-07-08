class Comment < ApplicationRecord
    belongs_to :show
    belongs_to :tag
   
    # validates :description, length: { maximum: 100,
    #     too_long: "%{count} characters is the maximum allowed" }
end
