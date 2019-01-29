# [twitterFlickrAPI](https://twitterflickrapi.herokuapp.com/)

Use the Twitter and Flickr APIs to return all photos with a #dctech hashtag within the last month and rank them by the number of retweets for twitter and number of comments for flickr.

Live: https://twitterflickrapi.herokuapp.com/

## Getting Started

* ``` git clone https://github.com/MARQUEZ93/twitterFlickrAPI.git ```
* ``` cd twitterFlickrAPI ```
* ``` npm install ```
* ``` npm run webpack ```
* ``` bundle install ```
* ``` curl -u 'key:secret_key' \ --data 'grant_type=client_credentials' \  'https://api.twitter.com/oauth2/token'    ```
* ``` export BEARER=YOUR_BEARER_TOKEN_FROM_THE_CURL_COMMAND ```
* ``` rails s ```
* ``` curl localhost ```

## Code Snippet

* The meat and bones of this project.
* I loop until there is no more 'next' keys in the responses. Twitter explains their [pagination](https://developer.twitter.com/en/docs/tweets/search/api-reference/premium-search)
* The BEARER variable is sent in the Authorization header to Twitter API.
* I map and filter the tweet data that I want to send to the frontend.
* I remove all duplicate tweets from the array as Twitter warns that this may occur.

<p align="center"><img src="https://i.imgur.com/tPhAEYw.png" width="800px" /></p>

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The frontend framework used.
* [Rails](https://guides.rubyonrails.org/) - The backend framework used.
* [FlickRaw](https://rubygems.org/gems/flickraw/versions/0.9.9) - Ruby gem to make API calls to the Flickr API.
* [Heroku](https://twitterflickrapi.herokuapp.com/) - Cloud platform that hosts the application.
* [Postman](https://www.getpostman.com/) - Allowed me to test API calls before writing the code in Rails.
* [Bootstrap](https://www.npmjs.com/package/react-bootstrap-table-next) - Styled the data in a table.
* [Twitter](https://developer.twitter.com/) - The Twitter API service

## My Thoughts
* This was fun. This was hard.
* This was my first experience with OAuth. I received access to a bearer token with my api key & secret key.
* I consoled.log'd & puts'd a lot. This allowed me to see what I was working with.
* I used env variables in both development and production. This protects the API keys as I pushed the code to Github.
* I published on Heroku because it was easy & free to do so. Makes it easier for you guys to see my work as well.
* I received access to my own sandbox api environment. I am using a free version that only has 250 calls a month.
* An enterprise account would be mandatory for an enterprise project. I'm not embarrassed to share that I created a fake twitter account to give myself 250 requests. I used all 250 requests.
* One big lesson I learned was to cross reference Github documentation with documentation on the respective dependency site.
