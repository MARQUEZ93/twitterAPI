class Api::TweetsController < ApplicationController
  def show
    Flickr.getFlicks 
  end
end
