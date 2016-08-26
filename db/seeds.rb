# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create!({description: "The Castro", lat: 37.759585, lng: -122.434932})
Bench.create!(description: "Haight-Ashbury", lat: 37.768018, lng: -122.448747)
Bench.create!(description: "Mission District", lat: 37.757926, lng: -122.415172)
