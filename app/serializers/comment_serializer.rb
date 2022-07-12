class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :show_id, :tag
end
