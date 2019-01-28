class Api::FlicksController < ApplicationController
  def show
    @flicks = FLCKR.getFlicks
    render json: @flicks
  end
end
