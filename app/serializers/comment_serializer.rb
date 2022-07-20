class CommentSerializer < ActiveModel::Serializer

  attributes :id, :description, :show_id, :tag_id, :show_name, :show_image
  def show_name
    object.show.name
  end
  def show_image
    object.show.image
  end

end
