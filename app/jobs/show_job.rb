class ShowJob < ApplicationJob
  queue_as :default

  def perform(show.id)
    show = Show.find(show.id)
    show.name = (show.name).titleize
    show.save!
    # Titleize The Show Name
  end
end
