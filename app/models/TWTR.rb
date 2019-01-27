class TWTR < ApplicationRecord
  def self.getTweets

    client = Twitter::Streaming::Client.new do |config|
      config.consumer_key        = "I8SQU0RLbUz4j4zx5oQZtjrY4"
      config.consumer_secret     = "I0HHMbT5vGFuNuIDKGU70DzK4FnZketPzcc2keKoyp3qnp6ixt"
      config.access_token        = "931992259410780162-VzmAg93nDGAd8FbVd1iXRqSS98zxg4b"
      config.access_token_secret = "lmOaty5ceRjeoofezFjQrjKgR1hkrL59Klq6BrAfpqCqB"
    end
    client.filter(track: "\\dctech")
  end

end
