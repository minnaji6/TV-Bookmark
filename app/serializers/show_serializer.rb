class ShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :show_tags, :show_comments
  

  def show_tags
    object.tags.map { |tag| tag.tag }.join(", ")
  end

  def show_comments
    object.comments.map { |comment| comment.description }.join(", ")
  end
end
