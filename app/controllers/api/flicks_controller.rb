class Api::FlicksController < ApplicationController
  def show
    @flicks = Flickr.getFlicks
    render json: @flicks
  end
end
