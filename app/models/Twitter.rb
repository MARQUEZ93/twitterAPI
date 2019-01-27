class Twitter < ApplicationRecord

  def self.getTweets

    RestClient.get 'https://api.twitter.com/1.1/tweets/search/30day/dev.json?query=\\dctech', {
      :consumer_key => "I8SQU0RLbUz4j4zx5oQZtjrY4",
      :consumer_secret => "I0HHMbT5vGFuNuIDKGU70DzK4FnZketPzcc2keKoyp3qnp6ixt",
      :access_token => "931992259410780162-VzmAg93nDGAd8FbVd1iXRqSS98zxg4b",
      :access_token_secret => "lmOaty5ceRjeoofezFjQrjKgR1hkrL59Klq6BrAfpqCqB"
    }
  end

end
