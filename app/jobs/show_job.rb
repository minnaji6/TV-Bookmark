class ShowJob < ApplicationJob
  queue_as :default

  def perform(show)
    show.update(name: show.name.titleize)
    show.save
    binding.irb
    puts "🎬 #{show.name} was successfully updated. 🎬"
    
  end
  
end
