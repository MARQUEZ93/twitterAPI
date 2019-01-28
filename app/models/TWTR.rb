class TWTR < ApplicationRecord
  def self.getTweets

    client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['TWTR_KEY']
      config.consumer_secret = ENV['TWTR_SECRET']
    end
    #i am only given tweets for around the last 10 days
    array = client.search("#dctech", result_type: "recent").take(100000).select do |tweet|
      tweet.media?
    end
    array = array.map do |tweet|
      {text: tweet.full_text, count: tweet.retweet_count, name: tweet.user.name}
    end

  end

end
