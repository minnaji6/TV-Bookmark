class ShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :show_tags, :show_comment, :show_season, :show_episode
  

  def show_tags
    object.tags.map { |tag| tag.tag }.join(", ")
  end

  def show_comment
    object.comments.map { |comment| comment.description }.join(", ")
  end

  def show_season
    object.seasons.map { |season| season.season_number }.join(", ")
  end

  def show_episode
    object.episodes.map { |episode| episode.episode_number }.join(", ")
  end
end
