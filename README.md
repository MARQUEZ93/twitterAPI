# [twitterFlickrAPI](https://twitterflickrapi.herokuapp.com/)

Use the Twitter and Flickr APIs to return all photos with a #dctech hashtag within the last month and rank them by the number of retweets for twitter and number of comments for flickr.

## Getting Started

* To run locally, clone the repo.
* ``` npm install. ```
* ``` npm run webpack. ```
* ``` bundle install ```
* ``` rails s. ```
* The project will available on http://localhost:3000/

## Code Snippet
* This class makes an API call to the Flickr server.
* The ENV variables are set for authorization.
* The [FlickRaw](https://rubygems.org/gems/flickraw/versions/0.9.9) gem is implemented.
* Search for flicks within the last month
* Parse response data in format desired by the frontend

<p align="center"><img src="https://i.imgur.com/VapudwH.png" width="800px" /></p>

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The frontend framework used
* [Rails](https://guides.rubyonrails.org/) - The backend framework used
* [Twitter](https://rubygems.org/gems/twitter/versions/6.2.0) - Twitter gem to make API calls Twitter API
* [FlickRaw](https://rubygems.org/gems/flickraw/versions/0.9.9) - Ruby gem to make API calls to Flickr API
* [Heroku](https://twitterflickrapi.herokuapp.com/) - Host that builds the project for production
* [Postman](https://www.getpostman.com/) - Allowed me to test API calls before writing the code in Rails.

## My Thoughts
1) This was my first experience with OAuth. Rather than write my own OAuth requests, I used Ruby gems recommended by both respective APIs.
2) I used env variables in both development and production. This protects the API keys as I pushed the code to Github.
3) The Twitter API was not developer friendly. They had broken links, and their instructions caused errors when I tested on Postman. In addition, I could only get results from OAuth 1.0 NOT OAuth 2.0.
4) The twitter gem only allowed me to deliver results of the past 10 days NOT the past 30 days.
5) In order to achieve the desired results, I would have had to make my OAuth 1.0 service (which is outdated).
6) I published on Heroku because it was easy & free to do so. Makes it easier for you guys to see my work. I am a full stack developer.
7) I had fun doing this. There was a lot of console logging, and putting API responses. The various documentation was not always accurate however (this caused headaches).
8) I manually tested the results. The twitter API was not accurate. For example, this tweet fails the media? boolean. It contains an image.
I viewed all available methods to the API responses, and for whatever reason this tweet will not register as containing an image. https://twitter.com/TechnicallyDC/status/1088562537938014208. I suspect more tweets slipped through the cracks.
