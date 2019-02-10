# [twitterAPI](https://twitterapi.herokuapp.com/)

Use Twitter's premium API service to return all tweets with a #dctech hashtag within the last 30 days. They are ranked by the number of retweets.
I am using a free sandbox account, so I have only have access to 250 requests a month.

Live: https://twitterapi.herokuapp.com/

## Getting Started

* ``` git clone https://github.com/MARQUEZ93/twitterAPI.git ```
* ``` cd twitterAPI ```
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

<p align="center"><img src="https://i.imgur.com/tYKQ0Wp.png" width="800px" /></p>

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The frontend framework used.
* [Rails](https://guides.rubyonrails.org/) - The backend framework used.
* [Heroku](https://www.heroku.com/) - Cloud platform that hosts the application.
* [Postman](https://www.getpostman.com/) - Allowed me to test API calls before writing the code in Rails.
* [Bootstrap](https://www.npmjs.com/package/react-bootstrap-table-next) - Styled the data in a table.
* [Twitter](https://developer.twitter.com/) - The Twitter API service

## My Thoughts
* This was fun. This was hard.
* This was my first experience with OAuth. I received access to a bearer token with my api key & secret key.
* I used env variables in both development and production. This protects the API keys from the client & Github.
* I received access to my own sandbox api environment. I am using a free version that only has 250 calls a month.
* I'm not embarrassed to share that I created a fake twitter account to give myself 250 requests. I used all 250 requests. Lots of console logging & puts'ing.
* One big lesson I learned was to cross reference Github documentation with documentation on the respective dependency site.
