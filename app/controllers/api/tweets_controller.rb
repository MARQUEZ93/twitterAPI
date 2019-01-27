class Api::TweetsController < ApplicationController
  def show
    render json: TWTR.getTweets()
  end
end
