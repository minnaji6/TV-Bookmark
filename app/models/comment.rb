class Comment < ApplicationRecord
    belongs_to :show
    belongs_to :tag
end
