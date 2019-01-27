class Api::TweetsController < ApplicationController
  def show
    @tweets = TWTR.getTweets
    render json: @tweets
  end
end
