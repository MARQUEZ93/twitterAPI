require 'flickraw'

FlickRaw.api_key=ENV['FLICKRAW_API_KEY']
FlickRaw.shared_secret=ENV['FLICKRAW_SHARED_SECRET']
class FLCKR < ApplicationRecord

  def self.getFlicks
    now = Date.today.to_time.to_i.to_s
    last_month = Date.today.last_month.to_time.to_i.to_s

    flickr = FlickRaw::Flickr.new

    args = {}

    # requires a limiting factor, so let's give it one
    args[:min_upload_date] = last_month
    args[:max_upload_date] = now
    args[:text] = "#dctech"

    photos = flickr.photos.search args
    frontend_array = []
    photos.map do |photo|
      image = flickr.photos.getInfo({photo_id: photo.id})
      comments = flickr.photos.comments.getList({photo_id: photo.id})
      if (comments.inspect != "FlickRaw::ResponseList")
        comments = [] #send array of length zero to frontend
      end
      frontend_array.push ({text: photo.title, comments: comments, name: image.owner.username })
    end
    frontend_array
  end

end
