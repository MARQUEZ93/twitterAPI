class Api::TweetsController < ApplicationController
  def show
    @tweets = Twitter.getTweets
    render json: @tweets
  end
end
