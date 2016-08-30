class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    north_lat = bounds["ne"]["lat"].to_f
    south_lat = bounds["sw"]["lat"].to_f
    west_lng = bounds["sw"]["lng"].to_f
    east_lng = bounds["ne"]["lng"].to_f
    half_filtered = Bench.where(lat: south_lat...north_lat)
    half_filtered.where(lng: west_lng...east_lng)
  end
end
