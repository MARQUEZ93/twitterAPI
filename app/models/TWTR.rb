class TWTR < ApplicationRecord
  def self.getTweets

    client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['TWTR_KEY']
      config.consumer_secret = ENV['TWTR_SECRET']
    end

    array = client.search("%23dctech", result_type: "recent").take(100000).select do |tweet|
      tweet.media?
    end
    #i am only given tweets for around the last 10 days
    array = array.map do |tweet|
      {type: "Twitter", text: tweet.full_text, count: tweet.retweet_count, user: tweet.user.name}
    end

  end

end
