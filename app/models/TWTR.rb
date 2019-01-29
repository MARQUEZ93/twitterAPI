class TWTR < ApplicationRecord

  def self.url_encode(s) #encode function I found online to properly encode the response['next'] for the subsequent GET request
     s.to_s.dup.force_encoding("ASCII-8BIT").gsub(/[^a-zA-Z0-9_\-.]/) {
       sprintf("%%%02X", $&.unpack("C")[0])
     }
     #this was one of the more annoying parts of the project
     #twitter requires encoding the next param, and there are many recommendations on stack overflow etc. on how to encode w/ ruby,
     #and many of these recommendations did NOT work
     #I tested in the console by using a working encode calculator online and copying/pasting results with various ruby functions that encode
  end

  def self.getTweets

    next_params = ""
    frontend_array = []

    while true
      res = RestClient::Request.execute(method: :get,
        url: "https://api.twitter.com/1.1/tweets/search/30day/dev.json?query=%23dctech has:media#{next_params}",
        :headers => {
          :Authorization => "Bearer #{ENV['BEARER']}"
          })
      next_response = url_encode(JSON.parse(res)['next'])

      break if (!next_response || next_response.nil? || next_response == "" || next_response == "next")
      #^ I am running out of api calls, so I this will have to do as a conditional

      next_params = "&next=#{next_response}"
      results = JSON.parse(res)['results']
      results.map! do |tweet| #pass data how we want in frontend
        {text: tweet["text"], name: tweet["user"]["screen_name"], count: tweet["retweet_count"]}
      end
      frontend_array.concat(results)
    end

  frontend_array.uniq! #removes duplicates as the twitter documentation warns that duplicates occur
end
end
