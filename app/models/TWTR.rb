class TWTR < ApplicationRecord
  def self.getTweets

    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "I8SQU0RLbUz4j4zx5oQZtjrY4"
      config.consumer_secret     = "I0HHMbT5vGFuNuIDKGU70DzK4FnZketPzcc2keKoyp3qnp6ixt"
      config.access_token        = "931992259410780162-VzmAg93nDGAd8FbVd1iXRqSS98zxg4b"
      config.access_token_secret = "lmOaty5ceRjeoofezFjQrjKgR1hkrL59Klq6BrAfpqCqB"
    end
    array = client.search("%23dctech", result_type: "recent").take(100000).select do |tweet|
      tweet.media?
    end
    #i am only given tweets for the last 10 days...680 tweets for dc tech
    array = array.map do |tweet|
      {text: tweet.full_text, count: tweet.retweet_count, user: tweet.user.name}
    end

  end

end
