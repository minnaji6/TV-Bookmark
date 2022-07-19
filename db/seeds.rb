require 'csv'
csv_text = File.read(Rails.root.join('lib', 'seeds', 'tvShowSeed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')


puts "Seeding shows...🎬  "

csv.each do |row|
    s = Show.new
    s.name = row['name']
    s.image = row['image']
    s.save
end


puts "Seeding tags... #"
Tag.create([{tag:"ongoing"},{tag:"cancelled"}, {tag:"upcoming"}, {tag:"finished"}, {tag:"watching"}, {tag:"want_to_watch"}])


puts "Seeding comments... 📝 "
csv.each do |row|
    c = Comment.new
    c.description = row['description']
    c.tag_id = row['tag_id']
    c.show_id = row['show_id']
    c.save
end


puts "Seeding seasons... 🎭"
csv.each do |row|
    sn = Season.new
    sn.season_number = row['season_number']
    sn.save
end

puts "Seeding episodes... 📺 "
csv.each do |row|
    e = Episode.new
    e.episode_number = row['episode_number']
    e.season_id = row['season_id']
    e.show_id = row['show_id']
    e.save
end

puts "📺 Done seeding! 🎞"
