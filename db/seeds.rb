require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'tvShowSeed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

# puts "Seeding shows...🎬"
# shows = Show.create([
#     {name: "Umbrella Academy", image: "https://artworks.thetvdb.com/banners/series/353764/posters/5efd5534a2ce9.jpg"}
#     {name: "The Flash", image: "https://artworks.thetvdb.com/banners/posters/279121-5.jpg"},
#     {name: "The Simpsons", image: "https://artworks.thetvdb.com/banners/posters/71663-15.jpg"},
#     {name: "The Walking Dead", image: "https://artworks.thetvdb.com/banners/v4/series/153021/posters/60fd8577d1a96.jpg"},
#     {name: "The Big Bang Theory", image: "https://artworks.thetvdb.com/banners/posters/80379-18.jpg"},
#     {name: "Brooklyn Nine-Nine", image: "https://artworks.thetvdb.com/banners/posters/269586-11.jpg"},
#     {name: "The Cleaning Lady", image: "https://artworks.thetvdb.com/banners/v4/series/402365/posters/61cf6eeba7b9f.jpg"},
#     {name: "Good Girls", image: "https://artworks.thetvdb.com/banners/posters/328577-4.jpg"},
#     {name: "Chuck", image: "https://artworks.thetvdb.com/banners/posters/80348-1.jpg"},
#     {name: "Scorpion", image: "https://artworks.thetvdb.com/banners/posters/281630-1.jpg"},
#     {name: "A Million Little Things", image: "https://artworks.thetvdb.com/banners/v4/series/350667/posters/6147a3866ebf1.jpg"},
#     {name: "Manifest", image: "https://artworks.thetvdb.com/banners/series/349271/posters/62024749.jpg"},
#     ])

puts "Seeding shows...🎬  tags... # comments... 📝 episodes... 📺 seasons... 🎭"


csv.each do |row|
   
    s = Show.find_or_create_by(name: row['name'], image: row['image'])
    sn = Season.find_or_create_by(season_number: row['Season_number'])
    t = Tag.find_or_create_by(tag: row['Tag'])
    c = Comment.find_or_create_by(description: row['Comment'], tag_id: row['tag_id'], show_id: row['show_id'])
    e = Episode.find_or_create_by(episode_number: row['number'], season_id: row['season_id'], show_id: row['show_id'])
    end


# mytags = ["ongoing", "cancelled", "upcoming", "finished", "watching", "want_to_watch"]
# Tag.create(mytags.map { |tag| {tag: tag} }) 



puts "📺 Done seeding! 🎞"
