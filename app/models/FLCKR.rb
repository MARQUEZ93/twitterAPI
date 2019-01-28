#set ENV variables
FlickRaw.api_key=ENV['FLICKRAW_API_KEY']
FlickRaw.shared_secret=ENV['FLICKRAW_SHARED_SECRET']

class FLCKR < ApplicationRecord

  def self.getFlicks
    #get now, and last month in UNIX time
    now = Date.today.to_time.to_i.to_s
    last_month = Date.today.last_month.to_time.to_i.to_s

    flickr = FlickRaw::Flickr.new

    args = {}
    #arguments for GET request
    args[:min_upload_date] = last_month
    args[:max_upload_date] = now
    args[:text] = "#dctech"

    photos = flickr.photos.search args
    frontend_array = []
    #prepare data that we want to send to frontend
    photos.map do |photo|
      image = flickr.photos.getInfo({photo_id: photo.id}) #get username
      comments = flickr.photos.comments.getList({photo_id: photo.id}) #get comments array
      if (comments.inspect != "FlickRaw::ResponseList")
        comments = [] #send array of length zero to frontend if there are NO comments
      end
      frontend_array.push ({text: photo.title, comments: comments, name: image.owner.username })
    end
    frontend_array
  end

end
